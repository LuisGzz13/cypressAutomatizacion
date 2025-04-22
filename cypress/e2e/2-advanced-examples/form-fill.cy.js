describe('Form Fill Test', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/formFill');
  });

  it('should fill out the form and submit it', () => {
    // Fill out the form fields
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('password123');

    // Click Save to db button
    cy.get('.form_btn.add').contains('Save to db').click();

    // Click Hide users button
    cy.get('.form_btn.orange').contains('Show users in db').click();
  });
}); 