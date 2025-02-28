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
    cy.get('[data-cy="rating-form"]').submit();
    cy.get(`[data-cy="MeiliHouse"] ul`).within(() => {
      cy.contains('li', '15404 SE 38th').should('be.visible');      
    }); 
  });
});