import { styled } from '../../Utilities';
import { DocumentCardActionsBase } from './DocumentCardActions.base';
import { getStyles } from './DocumentCardActions.styles';
import { IDocumentCardActionsProps, IDocumentCardActionsStyleProps, IDocumentCardActionsStyles } from './DocumentCardActions.types';

export const DocumentCardActions = styled<IDocumentCardActionsProps, IDocumentCardActionsStyleProps, IDocumentCardActionsStyles>(
  DocumentCardActionsBase,
  getStyles,
  undefined,
  { scope: 'DocumentCardActionsBase' }
);
