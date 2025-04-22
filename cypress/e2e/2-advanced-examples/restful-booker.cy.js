describe('Restful Booker API Tests', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let bookingId;

  it('should get all booking IDs', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking`,
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      
      // Store the first booking ID for later use
      bookingId = response.body[0].bookingid;
    });
  });

  it('should get booking details by ID', () => {
    // First get a booking ID if we don't have one
    if (!bookingId) {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/booking`,
        headers: {
          'Accept': 'application/json'
        }
      }).then((response) => {
        bookingId = response.body[0].bookingid;
      });
    }

    // Get booking details
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${bookingId}`,
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('firstname');
      expect(response.body).to.have.property('lastname');
      expect(response.body).to.have.property('totalprice');
      expect(response.body).to.have.property('depositpaid');
      expect(response.body).to.have.property('bookingdates');
      expect(response.body.bookingdates).to.have.property('checkin');
      expect(response.body.bookingdates).to.have.property('checkout');
    });
  });

  it('should create a new booking', () => {
    const newBooking = {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 200,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-03-01',
        checkout: '2024-03-05'
      },
      additionalneeds: 'Breakfast'
    };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/booking`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: newBooking
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
      expect(response.body.booking).to.deep.include({
        firstname: newBooking.firstname,
        lastname: newBooking.lastname,
        totalprice: newBooking.totalprice,
        depositpaid: newBooking.depositpaid,
        bookingdates: newBooking.bookingdates,
        additionalneeds: newBooking.additionalneeds
      });
    });
  });
}); 