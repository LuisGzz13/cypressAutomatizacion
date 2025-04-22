describe('Concatenate Strings Test', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/concatStrings');
  });

  it('should concatenate and submit strings', () => {
    // Click Generate strings button
    cy.get('.form_btn.add').contains('Generate strings').click();

    // Get both strings and concatenate them
    let concatenatedString = '';
    cy.get('.string1').then(($string1) => {
      const string1 = $string1.text();
      cy.get('.string2').then(($string2) => {
        const string2 = $string2.text();
        concatenatedString = string1 + string2;
        
        // Type the concatenated string into the input
        cy.get('input[name="strings"]').type(concatenatedString);
        
        // Click the Submit button
        cy.get('.form_btn.add').contains('Submit string').click();
      });
    });
  });
}); 