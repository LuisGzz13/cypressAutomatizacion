describe('Boozang Lab Exercises', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com');
  });

  it('Speed Game - Click the button as fast as possible', () => {
    cy.get('#speed-game button').click();
    cy.get('#speed-game .result').should('be.visible');
  });

  it('Wait Game - Wait for the button to appear and click it', () => {
    cy.get('#wait-game button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#wait-game .result').should('be.visible');
  });

  it('Yellow or Blue - Click the correct color button', () => {
    cy.get('#color-game .color-button').each(($button) => {
      const color = $button.text().trim().toLowerCase();
      if (color === 'yellow' || color === 'blue') {
        cy.wrap($button).click();
      }
    });
    cy.get('#color-game .result').should('be.visible');
  });

  it('Sorted List - Add 2 new items to the list', () => {
    const newItems = ['New Item 1', 'New Item 2'];
    
    newItems.forEach((item) => {
      cy.get('#sorted-list input').type(item);
      cy.get('#sorted-list button').click();
    });

    cy.get('#sorted-list li').should('have.length.at.least', 2);
    newItems.forEach((item) => {
      cy.get('#sorted-list li').should('contain', item);
    });
  });

  it('Form Fill - Add 2 items using fixtures and validate', () => {
    cy.fixture('form-data').then((data) => {
      data.items.forEach((item) => {
        cy.get('#form-fill input[name="name"]').type(item.name);
        cy.get('#form-fill input[name="description"]').type(item.description);
        cy.get('#form-fill button').click();
      });

      // Validate items were added
      data.items.forEach((item) => {
        cy.get('#form-fill .item-list').should('contain', item.name);
        cy.get('#form-fill .item-list').should('contain', item.description);
      });
    });
  });

  it('Cat Shelter - Add 2 cats and assign homes using fixtures', () => {
    cy.fixture('cat-names').then((data) => {
      data.cats.forEach((cat) => {
        cy.get('#cat-shelter input[name="name"]').type(cat.name);
        cy.get('#cat-shelter select').select(cat.home);
        cy.get('#cat-shelter button').click();
      });

      // Validate cats were added
      data.cats.forEach((cat) => {
        cy.get('#cat-shelter .cat-list').should('contain', cat.name);
        cy.get('#cat-shelter .cat-list').should('contain', cat.home);
      });
    });
  });

  it('Concatenate Strings - Combine two strings', () => {
    const string1 = 'Hello';
    const string2 = 'World';
    
    cy.get('#string-concat input[name="string1"]').type(string1);
    cy.get('#string-concat input[name="string2"]').type(string2);
    cy.get('#string-concat button').click();
    
    cy.get('#string-concat .result').should('contain', `${string1}${string2}`);
  });
}); 