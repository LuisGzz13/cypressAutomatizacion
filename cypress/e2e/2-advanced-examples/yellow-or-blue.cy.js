describe('Yellow or Blue Game Test', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue');
  });

  it('should click the correct colored button based on the text', () => {
    // Click the Generate Color button
    cy.get('.form_btn.add').contains('Generate Color').click();

    // Read the color text and click the corresponding button
    cy.get('h5.color').then(($colorText) => {
      const color = $colorText.text().toLowerCase();
      
      if (color === 'yellow') {
        cy.get('.form_btn.yellow').click();
      } else if (color === 'blue') {
        cy.get('.form_btn.blue').click();
      }
    });
  });
});