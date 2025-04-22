describe('Sorted List Test', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/sortedList');
  });

  it('should add items to the list and delete them', () => {
    // Add first item
    cy.get('input[type="text"]').type('First Item');
    cy.get('.form_btn.add').click();

    // Add second item
    cy.get('input[type="text"]').type('Second Item');
    cy.get('.form_btn.add').click();

    // Delete items using trash icons
    cy.get('.fas.fa-trash-alt.delete_icon').first().click();
    cy.get('.fas.fa-trash-alt.delete_icon').first().click();
  });
}); 