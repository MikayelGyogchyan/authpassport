/// <reference types="cypress" />

describe("My example project", () => {
  it("register and login", () => {
    cy.visit("http://localhost:3001/register");

    const email = `mikayel${Math.random()}@gmail.com`

    cy.get('[name=name').type("Mikayel The Great")
    cy.get('[name=email').type(email)
    cy.get('[name=password').type("123456789ABCDEF")
    cy.get('button[type=submit').click()

    cy.location('pathname').should('equal', '/login')
  
    cy.get('[name=email').type(email)
    cy.get('[name=password').type("123456789ABCDEF")
    cy.get('button[type=submit').click()

    cy.location('pathname').should('equal', '/')
    cy.pause()
    cy.get('a[href="/logout"]').click()
  });
});

