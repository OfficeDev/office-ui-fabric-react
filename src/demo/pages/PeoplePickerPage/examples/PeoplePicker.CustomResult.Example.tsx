import * as React from 'react';
import {
  DirectionalHint,
  PersonaPresence,
  Button,
  ButtonType,
  IDocumentCardActionsProps,
  IDocumentCardPreviewProps,
  IDocumentCardActivityPerson,
  IDocumentCardProps,
  IDocumentCardTitleProps,
  IDocumentCardActivityProps,
  DocumentCard,
  DocumentCardActions,
  DocumentCardActivity,
  DocumentCardLocation,
  DocumentCardPreview,
  DocumentCardTitle,
  SelectionZone,
  FocusZone,
  ImageFit
} from '../../../../index';
import {
  BasePicker
} from '../../../../components/pickers/BasePicker';
import {
  IBasePickerProps,
  IPickerItemProps
} from '../../../../components/pickers/BasePickerProps';
import './PeoplePicker.CustomResult.Example.scss';

export interface IPeoplePickerExampleState {
  contextualMenuVisible?: boolean;
  contextualMenuTarget?: HTMLElement;
}

export class PeoplePickerCustomResultExample extends React.Component<any, IPeoplePickerExampleState> {
  constructor() {
    super();
    this._onFilterChanged = this._onFilterChanged.bind(this);
  }

  public render() {

    return (
      <DocumentPicker
        onResolveSuggestions={this._onFilterChanged}
        onRenderItem={SelectedDocumentItem}
        onRenderSuggestion={SuggestedDocumentItem}
        />
    );
  }

  private _onFilterChanged(filterText: string) {
    return filterText ? data : [];
  }

}

export interface IFullDocumentCardProps {
  documentCardProps?: IDocumentCardProps;
  documentActionsProps?: IDocumentCardActionsProps;
  documentPreviewProps?: IDocumentCardPreviewProps;
  documentActivityProps?: IDocumentCardActivityProps;
  documentTitleProps?: IDocumentCardTitleProps;
}

export class DocumentPicker extends BasePicker<IFullDocumentCardProps, IBasePickerProps<IFullDocumentCardProps>> {
  render() {
    let { value } = this.state;

    return (
      <div>
        <div ref='root' className='ms-BasePicker' onKeyDown={ this._onKeyDown }>
          <SelectionZone selection={ this._selection }>
            <div className='ms-BasePicker-text'>
              <input ref='input'
                onFocus={ this._onInputFocus }
                onChange={ this._onInputChange }
                value={ value }
                className='ms-BasePicker-input'
                />
            </div>
          </SelectionZone>
        </div>
        <FocusZone ref='focusZone'>
          { this.renderItems() }
        </FocusZone>
        { this.renderSuggestions() }
      </div>
    );
  }
  protected _onBackSpace(ev: React.KeyboardEvent) {
    let { value } = this.state;
    if (ev.target === this.refs.input) {
      if (value && this.refs.input.selectionStart !== this.refs.input.selectionEnd) {
        this.setState({
          value: value.substring(0, this.refs.input.selectionStart)
        });
      }
    }
  }
}

export const SuggestedDocumentItem: (documentProps: IFullDocumentCardProps) => JSX.Element = (documentProps: IFullDocumentCardProps) => {
  return (<div> { documentProps.documentTitleProps.title } </div>);
}

export const SelectedDocumentItem: (documentProps: IPickerItemProps<IFullDocumentCardProps>) => JSX.Element = (documentProps: IPickerItemProps<IFullDocumentCardProps>) => {
  let {
    documentCardProps,
    documentActionsProps,
    documentPreviewProps,
    documentActivityProps,
    documentTitleProps
  } = documentProps.item;
  let actions = [];
  documentActionsProps.actions.forEach((action) => actions.push(action));
 actions.push({
    icon: 'x', onClick: (ev: any) => { documentProps.onRemoveItem() }
  });


  return (
    <DocumentCard
      onClick={ () => { console.log('You clicked the card.'); } }
      >
      <DocumentCardPreview { ...documentProps.item.documentPreviewProps }/>
      <DocumentCardLocation location='Marketing Documents' locationHref='http://microsoft.com' ariaLabel='Location, Marketing Documents'/>
      <DocumentCardTitle { ...documentTitleProps }/>
      <DocumentCardActivity { ...documentActivityProps }/>
      <DocumentCardActions actions={ actions }/>
    </DocumentCard>
  );
};

const data: IFullDocumentCardProps[] = [
  {
    documentPreviewProps: {
      previewImages: [
        {
          previewImageSrc: 'dist/document-preview.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview2.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview3.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ]
    },
    documentCardProps: {},
    documentActionsProps: {
      actions:
      [
        {
          icon: 'share', onClick: (ev: any) => {
            console.log('You clicked the share action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'pinLeft', onClick: (ev: any) => {
            console.log('You clicked the pin action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'bell', onClick: (ev: any) => {
            console.log('You clicked the bell action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
      ]
    },
    documentActivityProps: {
      activity: 'Created Feb 23, 2016',
      people:
      [
        { name: 'Kat Larrson', profileImageSrc: 'dist/avatar-kat.png' },
        { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
        { name: 'Tina Dasani', profileImageSrc: 'dist/avatar-kat.png' }
      ]
    },
    documentTitleProps: {
      title: 'Document1',
      shouldTruncate: true
    }
  },
  {
    documentPreviewProps: {
      previewImages: [
        {
          previewImageSrc: 'dist/document-preview.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview2.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview3.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ]
    },
    documentCardProps: {},
    documentActionsProps: {
      actions:
      [
        {
          icon: 'share', onClick: (ev: any) => {
            console.log('You clicked the share action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'pinLeft', onClick: (ev: any) => {
            console.log('You clicked the pin action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'bell', onClick: (ev: any) => {
            console.log('You clicked the bell action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
      ]
    },
    documentActivityProps: {
      activity: 'Created Feb 23, 2016',
      people:
      [
        { name: 'Kat Larrson', profileImageSrc: 'dist/avatar-kat.png' },
        { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
        { name: 'Tina Dasani', profileImageSrc: 'dist/avatar-kat.png' }
      ]
    },
    documentTitleProps: {
      title: 'Document2',
      shouldTruncate: true
    }
  },
  {
    documentPreviewProps: {
      previewImages: [
        {
          previewImageSrc: 'dist/document-preview.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview2.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview3.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ]
    },
    documentCardProps: {},
    documentActionsProps: {
      actions:
      [
        {
          icon: 'share', onClick: (ev: any) => {
            console.log('You clicked the share action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'pinLeft', onClick: (ev: any) => {
            console.log('You clicked the pin action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'bell', onClick: (ev: any) => {
            console.log('You clicked the bell action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
      ]
    },
    documentActivityProps: {
      activity: 'Created Feb 23, 2016',
      people:
      [
        { name: 'Kat Larrson', profileImageSrc: 'dist/avatar-kat.png' },
        { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
        { name: 'Tina Dasani', profileImageSrc: 'dist/avatar-kat.png' }
      ]
    },
    documentTitleProps: {
      title: 'Document3',
      shouldTruncate: true
    }
  },
  {
    documentPreviewProps: {
      previewImages: [
        {
          previewImageSrc: 'dist/document-preview.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview2.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        },
        {
          previewImageSrc: 'dist/document-preview3.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ]
    },
    documentCardProps: {},
    documentActionsProps: {
      actions:
      [
        {
          icon: 'share', onClick: (ev: any) => {
            console.log('You clicked the share action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'pinLeft', onClick: (ev: any) => {
            console.log('You clicked the pin action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        {
          icon: 'bell', onClick: (ev: any) => {
            console.log('You clicked the bell action.');
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
      ]
    },
    documentActivityProps: {
      activity: 'Created Feb 23, 2016',
      people:
      [
        { name: 'Kat Larrson', profileImageSrc: 'dist/avatar-kat.png' },
        { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
        { name: 'Tina Dasani', profileImageSrc: 'dist/avatar-kat.png' }
      ]
    },
    documentTitleProps: {
      title: 'Document4',
      shouldTruncate: true
    }
  }
];
