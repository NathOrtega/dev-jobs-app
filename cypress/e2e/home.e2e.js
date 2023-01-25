/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Given user is on the Home Page', () => {
  it('Should be able to toogle the theme', () => {
    cy.visit('/', {
      onBeforeLoad (win) {
        cy.stub(win, 'matchMedia').withArgs('(prefers-color-scheme: dark)').returns({ matches: false })
        win.matchMedia.callThrough()
      },
    })
    cy.get('#root').should('have.css', 'background-color', 'rgb(244, 246, 248)')
    cy.get('[data-cy=toggleTheme]').should('be.visible').click()
    cy.get('#root').should('have.css', 'background-color', 'rgb(18, 23, 33)')
    cy.get('[data-cy=toggleTheme]').should('be.visible').click()
    cy.get('#root').should('have.css', 'background-color', 'rgb(244, 246, 248)')
  })

  it('Should be able to see the offer Cards', () => {
    cy.visit('/')
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 6)
    cy.get('[data-cy=loadMore]').should('be.visible').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 12)
    cy.get('[data-cy=loadMore]').should('not.exist')
  })

  it('Should be able to apply filters', () => {
    cy.visit('/')
    cy.get('[data-cy=titleFilter]').type('Senior')
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 4)
    cy.get('[data-cy=titleFilter]').clear()
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=locationFilter]').type('Germany')
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 1)
    cy.get('[data-cy=locationFilter]').clear()
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=fulltimeFilter]').click()
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 4)
    cy.get('[data-cy=fulltimeFilter]').click()
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 6)
    cy.get('[data-cy=titleFilter]').type('Developer')
    cy.get('[data-cy=locationFilter]').type('United Kingdom')
    cy.get('[data-cy=fulltimeFilter]').click()
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').find('[data-cy=offerCard]').should('have.length', 1)
  })

  it('Should display the Not Found animation when filter does not apply', () => {
    cy.visit('/')
    cy.get('[data-cy=titleFilter]').type('Hello')
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').should('not.exist')
    cy.get('[data-cy=noResults]').should('be.visible')
    cy.get('[data-cy=titleFilter]').clear()
    cy.get('[data-cy=locationFilter]').type('World')
    cy.get('[data-cy=searchButton]').click()
    cy.get('[data-cy=offerCardsContainer]').should('not.exist')
    cy.get('[data-cy=noResults]').should('be.visible')
  })

  it('Should be able to access the detail page of a card and see more info', () => {
    const testData = {
      "company": "Scoot",
      "position": "Senior Software Engineer",
      "postedAt": "5h ago",
      "contract": "Full Time",
      "location": "United Kingdom",
    }

    cy.visit('/')
    cy.get('#offerInfo1').click()
    cy.url().should('eq', 'http://localhost:3000/dev-jobs-app/#/detail/1')
    cy.get('[data-cy=company]').contains(testData.company)
    cy.get('[data-cy=dateAndContract]').contains(`${testData.postedAt} • ${testData.contract}`)
    cy.get('[data-cy=position]').contains(testData.position)
    cy.get('[data-cy=location]').contains(testData.location)
  })
})