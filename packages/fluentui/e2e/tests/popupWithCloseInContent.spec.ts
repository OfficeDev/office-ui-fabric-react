import { selectors } from './popupWithCloseInContent-example';

const popupTrigger = `#${selectors.popupTriggerId}`;
const popupContent = `#${selectors.popupContentId}`;
const popupClose = `#${selectors.popupCloseId}`;

describe('Popup With Close in the content and hover trigger', () => {
  beforeEach(() => {
    cy.gotoTestCase(__filename, popupTrigger);
  });

  it('When opened by hover, a click on content should not close popup, a click button should close popup', () => {
    cy.hover(popupTrigger);
    cy.visible(popupContent);

    cy.clickOn(popupContent);
    cy.visible(popupContent);

    cy.clickOn(popupClose);
    cy.notExist(popupContent);
  });

  it('When opened by hover & click, should be kept it opened on content click', () => {
    cy.hover(popupTrigger);
    cy.visible(popupContent);

    cy.clickOn(popupTrigger);
    cy.isFocused(popupTrigger);
    cy.visible(popupContent);

    cy.clickOn(popupContent);
    cy.visible(popupContent);
  });
});
