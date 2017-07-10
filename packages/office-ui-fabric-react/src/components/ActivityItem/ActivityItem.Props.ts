import * as React from 'react';
import { IStyle } from '../../Styling';
import { IRenderFunction } from '../../Utilities';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';

// Please keep alphabetized
export interface IActivityItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Text or elements in this array will be shown in order as the description of the activity that occurred.
   */
  activityDescription: Array<string | JSX.Element>;

  /**
   * Text or elements of a comment that will be shown in order under the activity description.
   */
  commentElements?: Array<string | JSX.Element>;

  /**
   * Used to render the main icon. Pass in an array of Persona props to automatically render a Persona group, or pass in a JSX element to render your own content, such as an Icon, here.
   */
  iconContents: Array<IPersonaProps> | JSX.Element;

  /**
   * Indicated if the compact styling should be used.
   */
  isCompact?: boolean;

  /**
   * A renderer adds a time stamp. If not included, timeStamp is shown as plain text below the activity.
   */
  onRenderTimeStamp?: IRenderFunction<IActivityItemProps>;

  /**
   * Optional styling for the elements within the Activity Item.
   */
  styles?: IActivityItemStyles;

  /**
   * Text shown as a timestamp on this activity. If not included, no timestamp is shown.
   */
  timeStamp?: string;
}

export interface IActivityItemStyles {
  /**
   * Styles applied to the root activity item container.
   */
  root?: IStyle;

  /**
   * Styles applied to the main container of the activity's description.
   */
  activityContent?: IStyle;

  /**
   * Styles applied to the persona of the user that did this activity.
   */
  activityPersona?: IStyle;

  /**
   * Styles applied to the icon indicating the type of the activity. Only shown when personas are unavailable.
   */
  activityTypeIcon?: IStyle;

  /**
   * Styles applied to the text of comments.
   */
  commentText?: IStyle;

  /**
   * Styles applied to personas when two users are involved in a single activity.
   */
  doublePersona?: IStyle;

  /**
   * Styles applied to personas and icons in the compact variant.
   */
  isCompactIcon?: IStyle;

  /**
   * Styles applied to main text container in the compact variant.
   */
  isCompactContent?: IStyle;

  /**
   * Styles applied to personas in the compact variant.
   */
  isCompactPersona?: IStyle;

  /**
   * Styles applied to a wrapper around personas in the compact variant.
   */
  isCompactPersonaContainer?: IStyle;

  /**
   * Styles applied to the container of the persona image or activity type icon.
   */
  personaContainer?: IStyle;

  /**
   * Styles applied to the timestamp at the end of each activity item.
   */
  timeStamp?: IStyle;
}