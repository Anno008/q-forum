/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    createEmployee(
      email: string,
      name: string,
      phone: string,
      city: string,
      zip: string,
      address1: string,
      address2: string,
      dateOfEmployment: string,
      dateOfBirth: string
    ): Chainable;
  }
}
