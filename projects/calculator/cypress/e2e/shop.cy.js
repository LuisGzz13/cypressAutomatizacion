describe('Shop Tests', () => {
    beforeEach(() => {
        // Visit the shop page before each test
        cy.visit('/shop');
    });

    it('should search for an item and add it to the cart', () => {
        // Search for an item
        cy.get('input[placeholder="Search"]').type('Laptop'); // Adjust the selector as needed
        cy.get('button[type="submit"]').click();

        // Verify search results contain the item
        cy.contains('Laptop').should('be.visible');

        // Add the item to the cart
        cy.contains('Laptop')
            .parent()
            .find('button')
            .contains('Add to Cart')
            .click();

        // Verify the item is added to the cart
        cy.get('.cart-icon').click();
        cy.contains('Laptop').should('be.visible');
    });
});