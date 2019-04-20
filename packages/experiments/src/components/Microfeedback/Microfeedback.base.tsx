/** @jsx withSlots */
import * as React from 'react';
import { withSlots } from '../../Foundation';
import { Stack } from '../../Stack';
import { classNamesFunction } from '../../Utilities';
import { IconButton, IButtonStyles, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { Text, ITextStyles } from 'office-ui-fabric-react/lib/Text';
import { IMicrofeedbackProps, IMicrofeedbackStyleProps, IMicrofeedbackStyles, VoteType } from './Microfeedback.types';
import { IProcessedStyleSet } from 'office-ui-fabric-react/lib/Styling';

const getClassNames = classNamesFunction<IMicrofeedbackStyleProps, IMicrofeedbackStyles>();

const microfeedbackStyles: IStackStyles = {
  root: [
    {
      margin: 8,
      float: 'right'
    }
  ]
};

const microfeedbackItemStyles: IButtonStyles = {
  root: [
    {
      border: '0px',
      width: '100%'
    }
  ]
};

const microfeedbackTextStyles: ITextStyles = {
  root: [
    {
      margin: '10px',
      fontWeight: 'bold'
    }
  ]
};

export interface IMicrofeedbackState {
  vote: VoteType;
  isFollowupVisible: boolean;
}

export class MicrofeedbackBase extends React.Component<IMicrofeedbackProps, IMicrofeedbackState> {
  // ref's will be linked to each of the icons for callout placement
  private dislikeRef = React.createRef<HTMLDivElement>();
  private likeRef = React.createRef<HTMLDivElement>();
  private classNames: IProcessedStyleSet<IMicrofeedbackStyles>;

  constructor(props: IMicrofeedbackProps) {
    super(props);

    this.state = {
      // initial state of icons is neutral and followup is not visible
      vote: 'no_vote',
      isFollowupVisible: false
    };
  }

  public render() {
    const likeIcon = this.state.vote === 'like' ? 'LikeSolid' : 'Like';
    const dislikeIcon = this.state.vote === 'dislike' ? 'DislikeSolid' : 'Dislike';
    const hideThumbsDownCallout = this.state.vote !== 'dislike' || !this.state.isFollowupVisible;
    const hideThumbsUpCallout = this.state.vote !== 'like' || !this.state.isFollowupVisible;

    this.classNames = getClassNames(this.props.styles, {
      theme: this.props.theme
    });

    return (
      <Stack className={this.classNames.root} horizontal styles={microfeedbackStyles}>
        <div ref={this.likeRef}>
          <IconButton menuIconProps={{ iconName: likeIcon }} title={this.props.thumbsUpTitle} onClick={this._likeVote} />
        </div>
        <div ref={this.dislikeRef}>
          <IconButton menuIconProps={{ iconName: dislikeIcon }} title={this.props.thumbsDownTitle} onClick={this._dislikeVote} />
        </div>
        {this.props.thumbsUpQuestion ? (
          <Callout
            className={this.classNames.followUpContainer}
            hidden={hideThumbsUpCallout}
            role="alertdialog"
            gapSpace={0}
            target={this.likeRef.current}
            setInitialFocus={true}
            onDismiss={this._onCalloutDismiss}
          >
            <FocusZone direction={FocusZoneDirection.vertical}>
              <Text block={true} className={this.classNames.followUpQuestion} styles={microfeedbackTextStyles} variant="small">
                {this.props.thumbsUpQuestion.question}
              </Text>
              <List items={this.props.thumbsUpQuestion.options} onRenderCell={this._onRenderCalloutItem} />
            </FocusZone>
          </Callout>
        ) : null}
        {this.props.thumbsDownQuestion ? (
          <Callout
            className={this.classNames.followUpContainer}
            hidden={hideThumbsDownCallout}
            role="alertdialog"
            gapSpace={0}
            target={this.dislikeRef.current}
            setInitialFocus={true}
            onDismiss={this._onCalloutDismiss}
          >
            <FocusZone direction={FocusZoneDirection.vertical}>
              <Text block={true} className={this.classNames.followUpQuestion} styles={microfeedbackTextStyles} variant="small">
                {this.props.thumbsDownQuestion.question}
              </Text>
              <List items={this.props.thumbsDownQuestion.options} onRenderCell={this._onRenderCalloutItem} />
            </FocusZone>
          </Callout>
        ) : null}
      </Stack>
    );
  }

  private _onCalloutDismiss = (): void => {
    this.setState({ isFollowupVisible: false });
  };

  private _onRenderCalloutItem = (item: string, index: number | undefined): JSX.Element => {
    const listOption = (): void => {
      this._onCalloutDismiss();
      if (this.props.sendFollowupIndex && index !== undefined) {
        this.props.sendFollowupIndex(index);
      }
    };

    return (
      <DefaultButton data-is-focusable={true} styles={microfeedbackItemStyles} onClick={listOption}>
        <Text className={this.classNames.followUpOptionText} variant="small">{`${item}`}</Text>
      </DefaultButton>
    );
  };

  private _vote(vote: VoteType): void {
    // If the vote that is already selected is picked, then toggle off
    const updatedVote: VoteType = this.state.vote === vote ? 'no_vote' : vote;
    this.setState({ isFollowupVisible: true, vote: updatedVote });
    if (updatedVote !== 'no_vote' && this.props.sendFeedback) {
      this.props.sendFeedback(vote);
    }
  }

  private _likeVote = () => {
    this._vote('like');
  };
  private _dislikeVote = () => {
    this._vote('dislike');
  };
}
