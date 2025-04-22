describe('Cat Shelter Test', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/catShelter');
  });

  it('should add a cat to the shelter', () => {
    // Click the Add Cat link button
    cy.get('.link_btn.add').click();

    // Fill out the cat details
    cy.get('input[name="name"]').type('Whiskers');
    cy.get('textarea[name="description"]').type('A friendly cat who loves to play');
    
    // Select "Wants to go outside" radio button
    cy.get('input[name="inOrOutside"][value="outside"]').click();

    // Click the Add Cat button
    cy.get('.form_btn.add').click();
  });

  it('should edit the cat name', () => {
    // Click the paw icon to edit the cat
    cy.get('.fas.fa-paw').first().click();

    // Clear the existing name and type a new one
    cy.get('input[name="name"].name')
      .clear()
      .type('Mittens');

    // Click the Save button
    cy.get('.form_btn.add').contains('Save').click();
  });

  it('should delete the cat', () => {
    // Click the paw icon to edit the cat
    cy.get('.fas.fa-paw').first().click();

    // Click the Delete button
    cy.get('.form_btn.delete').click();
  });
}); 