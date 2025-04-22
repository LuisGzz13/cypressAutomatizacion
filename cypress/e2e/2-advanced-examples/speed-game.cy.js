describe('Speed Game Test', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/speedGame');
    });
  
    it('should test reaction time by clicking the end game button as fast as possible', () => {
      // Click the Start Game button
      cy.get('[data-testid="startBtn"]').click();

  
      // Wait for and click the End Game button as soon as it appears (after 1-10 seconds)
      cy.get('.form_btn.delete', { timeout: 12000 })
        .should('be.visible')
        .click();
  
    });
  });