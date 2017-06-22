/* tslint:disable */
import * as React from 'react';
/* tslint:enable */

import { autobind, BaseComponent, css, getNativeProps, htmlElementProperties, memoize } from '../../Utilities';
import { IActivityItemProps, IActivityItemStyles, ActivityType } from './ActivityItem.Props';
import { ActivityDescription } from './ActivityDescription';
import { mergeStyles } from '../../Styling';
import { getStyles } from './ActivityItem.styles';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Image } from '../Image/Image';
import { Icon } from '../../Icon';

export interface IActivityItemClassNames {
  root?: string;
  activityContent?: string;
  personaContainer?: string;
  activityPersona?: string;
  activityTypeIcon?: string;
  nameText?: string;
  docLink?: string;
  commentText?: string;
  timeStamp?: string;
}

export class ActivityItem extends BaseComponent<IActivityItemProps, {}> {

  private _classNames: IActivityItemClassNames;

  constructor(props: IActivityItemProps) {
    super(props);
  }

  public render() {
    let {
      className,
      styles: customStyles
    } = this.props;

    this._classNames = this._getClassNames(
      getStyles(undefined, customStyles),
      this.props.className,
      this.props.people.length
    );

    return (
      <div className={ this._classNames.root }>

        { this._onRenderPersonas(this.props) }

        <div className={ this._classNames.activityContent }>
          <div>
            { this._onRenderNameList(this.props, this.props.people.length) }
            <ActivityDescription {...this.props} _classNames={ this._classNames } />
          </div>

          { this._onRenderCommentText(this.props) }
          <div className={ this._classNames.timeStamp }>{ this.props.timeString }</div>
        </div>

      </div>
    );
  }

  // Render up to four personas if they're available, otherwise show an icon based on what activityType is set.
  @autobind
  private _onRenderPersonas(props: IActivityItemProps): JSX.Element {
    let personaElement: JSX.Element;
    if (this.props.people[0].imageUrl) {
      let personaList = [];
      this.props.people.filter((person, index) => index < 4).forEach((person, index) => {
        personaList.push(
          <Persona
            key={ person['key'] ? person['key'] : index }
            className={ this._classNames.activityPersona }
            primaryText={ person.primaryText }
            imageUrl={ person.imageUrl }
            size={ this.props.people.length > 1 ? PersonaSize.size16 : PersonaSize.extraSmall }
            hidePersonaDetails={ true } />
        );
      });
      personaElement = <div className={ this._classNames.personaContainer }>{ personaList }</div>;
    } else {
      let iconString = ActivityType[props.activityType];;
      switch (props.activityType) {
        case ActivityType.CommentInDocument:
          iconString = 'Message';
          break;
        case ActivityType.Mention:
          iconString = 'Accounts';
          break;
        case ActivityType.Move:
          iconString = 'FabricMovetoFolder';
          break;
        case ActivityType.Restore:
          iconString = 'Refresh';
          break;
      }
      personaElement = <div className={ this._classNames.activityTypeIcon }><Icon iconName={ iconString } /></div>;
    }
    return personaElement;
  }

  // Render the list of names involved in the activity. Shows up to the first two names before just referring to the number of other names.
  @autobind
  private _onRenderNameList(props: IActivityItemProps, length: number): JSX.Element {
    let nameListElement: JSX.Element;
    if (length === 1) {
      nameListElement = <span className={ this._classNames.nameText }>{ this.props.people[0].primaryText }</span>;
    } else if (length === 2) {
      nameListElement = (
        <span>
          <span className={ this._classNames.nameText }>{ this.props.people[0].primaryText }</span>
          <span> and </span>
          <span className={ this._classNames.nameText }>{ this.props.people[1].primaryText }</span>
        </span>
      )
    } else {
      nameListElement = (
        <span>
          <span className={ this._classNames.nameText }>{ this.props.people[0].primaryText }</span>
          <span>, </span>
          <span className={ this._classNames.nameText }>{ this.props.people[1].primaryText }</span>
          <span> and </span>
          <span className={ this._classNames.nameText }>{ this.props.people.length === 3 ? '1 other' : `${this.props.people.length - 2} others` }</span>
        </span>
      )
    }
    return nameListElement;
  }

  // Render the comment text and attempt to highlight the mentioned name if one was used.
  @autobind
  private _onRenderCommentText(props: IActivityItemProps): JSX.Element {
    let commentElement: JSX.Element = <div className={ this._classNames.commentText }>{ props.commentString }</div>

    if (props.mentionedName && props.commentString.indexOf(props.mentionedName) !== -1) {
      let parsedComment = props.commentString.split(props.mentionedName);
      let nameElement = props.mentionedHref ?
        (<a href={ props.mentionedHref } className={ this._classNames.docLink }>{ props.mentionedName }</a>) :
        (<span className={ this._classNames.nameText }>{ props.mentionedName }</span>);

      commentElement = (
        <div className={ this._classNames.commentText }>
          { parsedComment[0] }
          { nameElement }
          { parsedComment[1] }
        </div>
      );
    }

    return commentElement;
  }

  // Determine the class lists for each className.
  @memoize
  private _getClassNames(styles: IActivityItemStyles, className: string, numberOfPeople: number): IActivityItemClassNames {
    return {
      root: mergeStyles(
        'ms-ActivityItem',
        styles.root,
        className
      ) as string,

      activityContent: mergeStyles(
        'ms-ActivityItem-activityContent',
        styles.activityContent
      ) as string,

      personaContainer: mergeStyles(
        'ms-ActivityItem-personaContainer',
        styles.personaContainer
      ) as string,

      activityTypeIcon: mergeStyles(
        'ms-ActivityItem-activityTypeIcon',
        styles.activityTypeIcon
      ) as string,

      activityPersona: mergeStyles(
        'ms-ActivityItem-activityPersona',
        styles.activityPersona,
        numberOfPeople === 2 && styles.doublePersona
      ) as string,

      nameText: mergeStyles(
        'ms-ActivityItem-nameText',
        styles.nameText
      ) as string,

      docLink: mergeStyles(
        'ms-ActivityItem-docLink',
        styles.docLink
      ) as string,

      commentText: mergeStyles(
        'ms-ActivityItem-commentText',
        styles.commentText
      ) as string,

      timeStamp: mergeStyles(
        'ms-ActivityItem-timeStamp',
        styles.timeStamp
      ) as string
    };
  }
}