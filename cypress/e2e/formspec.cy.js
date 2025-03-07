describe('booking_form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("Creates a booking", () => {
    cy.get('[data-cy="input-name"]').type('MeiliHouse');
    cy.get('[data-cy="input-address"]').type('15404 SE 38th');
    cy.get('[data-cy="input-phone"]').type('123456');
    cy.get('[data-cy="input-cuisine"]').type('China');
    cy.get('[data-cy="input-rating"]').type('4');

    // Intercept API request if applicable
    cy.intercept('POST', '/api/bookings').as('createBooking');
    
    cy.get('[data-cy="rating-form"]').submit();    

        cy.get('[data-cy="MeiliHouse"]').should('exist');

    // Select the specific restaurant item (assuming it's the first one)
    cy.get('[data-cy="restaurant-item"]').first().within(() => {
      cy.contains('li', '15404 SE 38th').should('be.visible');
      cy.contains('li', '123456').should('be.visible');
      cy.contains('li', 'China').should('be.visible');
      cy.contains('li', '4').should('be.visible');
    });
  });
});
