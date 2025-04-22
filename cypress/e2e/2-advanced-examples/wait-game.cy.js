describe('Speed Game Test', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/waitGame');
    });
  
    it('should test reaction time by clicking the end game button in 5 seconds', () => {
      // Click the Start Game button
      cy.get('[data-testid="startBtn"]').click();

  
      // Wait exactly 5 seconds before clicking the button
      cy.wait(5000);
      cy.get('.form_btn.delete', { timeout: 12000 })
        .should('be.visible')
        .click();
  
    });
  });