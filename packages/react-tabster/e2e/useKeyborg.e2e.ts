import { KEYBOARD_NAV_ATTRIBUTE } from '../src/symbols';

describe('Keyborg', () => {
  beforeEach(() => cy.visitStory('tabster', 'Keyborg'));

  it('should open when clicked', () => {
    cy.contains('Start').focus().realPress('Tab');
    cy.contains('Finish').should('be.focused').parent().should('have.attr', KEYBOARD_NAV_ATTRIBUTE);
  });
});
