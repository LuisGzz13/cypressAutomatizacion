describe("template spec", () => {
    it("passes", () => {
      // Navigate to the banking application login page
      cy.visit(
        "https://globalsqa.com/angularJs-protractor/BankingProject/#/login",
      );

      // Step 1: Manager creates a new customer
      // Click Bank Manager Login button
      cy.get(":nth-child(3) > .btn").click();
      // Click Add Customer button
      cy.get('[ng-class="btnClass1"]').click();
  
      // Fill in customer details form
      cy.get(":nth-child(1) > .form-control").type("John"); // First Name
      cy.get(":nth-child(2) > .form-control").type("Doe");  // Last Name
      cy.get(":nth-child(3) > .form-control").type("64700"); // Post Code
      cy.get("form.ng-dirty > .btn").click(); // Submit customer creation
  
      // Step 2: Manager creates a Dollar account for the customer
      cy.get('[ng-class="btnClass2"]').click(); // Click Open Account button
      cy.get("#userSelect").select("John Doe"); // Select the created customer
      cy.get("#currency").select("Dollar");     // Select Dollar as currency
      cy.get("form.ng-dirty > button").click(); // Submit account creation
  
      // Step 3: Customer performs transactions
      // Navigate to Customer Login
      cy.get(".home").click(); // Return to home page
      cy.get(".borderM > :nth-child(1) > .btn").click(); // Click Customer Login
      cy.get("#userSelect").select("John Doe"); // Select customer
      cy.get("form.ng-valid > .btn").click();   // Submit login
  
      // Step 4: Customer deposits $800
      cy.get('[ng-class="btnClass2"]').click(); // Click Deposit button
      // Wait for the amount input to be enabled
      cy.get("input[ng-model='amount']").should('not.be.disabled');
      cy.get("input[ng-model='amount']").type("800");      // Enter deposit amount
      cy.get("form.ng-dirty > .btn").click();   // Submit deposit
  
      // Step 5: Customer attempts to withdraw $1,500 (should fail)
      cy.get('[ng-class="btnClass3"]').click(); // Click Withdraw button
      // Wait for the amount input to be enabled
      cy.get("input[ng-model='amount']").should('not.be.disabled');
      cy.get("input[ng-model='amount']").type("1500");     // Enter withdrawal amount
      cy.get("form.ng-dirty > .btn").click();   // Submit withdrawal
  
      // Step 6: Customer withdraws $500 (should succeed)
      // Wait for the amount input to be enabled
      cy.get("input[ng-model='amount']").should('not.be.disabled');
      cy.get("input[ng-model='amount']").type("500");      // Enter withdrawal amount
      cy.get("form.ng-dirty > .btn").click();   // Submit withdrawal
  
      // Step 7: Verify transaction history
      cy.get('[ng-class="btnClass1"]').click(); // Click Transactions button
    });
  });