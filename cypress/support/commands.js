/* eslint-disable no-undef */
import "@testing-library/cypress/add-commands";
import locators from "~/testUtils/locators";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const compareColor = (color, property) => targetElement => {
  const tempElement = document.createElement("div");
  tempElement.style.color = color;
  tempElement.style.display = "none"; // make sure it doesn't actually render
  document.body.appendChild(tempElement); // append so that `getComputedStyle` actually works

  const tempColor = getComputedStyle(tempElement).color;
  const targetColor = getComputedStyle(targetElement[0])[property];

  document.body.removeChild(tempElement); // remove it because we're done with it

  expect(tempColor).equal(targetColor);
};

Cypress.Commands.overwrite("should", (originalFn, subject, expectation, ...args) => {
  const customMatchers = {
    "have.backgroundColor": compareColor(args[0], "backgroundColor"),
    "have.color": compareColor(args[0], "color")
  };

  // See if the expectation is a string and if it is a member of Jest's expect
  if (typeof expectation === "string" && customMatchers[expectation]) {
    return originalFn(subject, customMatchers[expectation]);
  }
  return originalFn(subject, expectation, ...args);
});

Cypress.Commands.add(
  "createEmployee",
  (email, name, phone, city, zip, address1, address2, dateOfEmployment, dateOfBirth) => {
    const emailInput = cy.findByTestId(locators.upsertEmployeePageEmailInput);
    const nameInput = cy.findByTestId(locators.upsertEmployeePageNameInput);
    const phoneNumberInput = cy.findByTestId(locators.upsertEmployeePagePhoneInput);
    const cityInput = cy.findByTestId(locators.upsertEmployeePageCityInput);
    const zipCodeInput = cy.findByTestId(locators.upsertEmployeePageZipCodeInput);
    const addressLine1Input = cy.findByTestId(locators.upsertEmployeePageAddressLine1Input);
    const addressLine2Input = cy.findByTestId(locators.upsertEmployeePageAddressLine2Input);
    const dateOfEmploymentInput = cy.findByTestId(locators.upsertEmployeePageDateOfEmploymentInput);
    const dateOfBirthInput = cy.findByTestId(locators.upsertEmployeePageDateOfBirthInput);
    const submitButton = cy.findByTestId(locators.upsertEmployeePageSubmitButton);

    emailInput.type(email);
    nameInput.type(name);
    phoneNumberInput.type(phone);
    cityInput.type(city);
    zipCodeInput.type(zip);
    addressLine1Input.type(address1);
    addressLine2Input.type(address2);
    dateOfEmploymentInput.type(dateOfEmployment);
    dateOfBirthInput.type(dateOfBirth);

    submitButton.click();
  }
);
