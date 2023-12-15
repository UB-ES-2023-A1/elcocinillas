describe('Darkmode', () => {
  it('Testing Dark Mode', () => {
    cy.visit('http://localhost:8080/elcocinillas/')

    cy.get('[data-cy="nut"]').click()
    cy.contains('Dark Mode').click()

    // Test dark mode in HomeView.vue
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    cy.contains('Tiempo').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Dieta').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Plato').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('minutos').should('have.css', 'color', 'rgb(255, 255, 255)')
    
    // Test dark mode in RecipesView.vue
    cy.contains('Recetas').click()
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    cy.contains('Recetas').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Tiempo:').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Filtros').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Dietas:').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Tipos de Plato:').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('nueva receta').should('have.css', 'color', 'rgb(255, 255, 255)')
    //cy.contains('[data-cy="boton-flotante"]').should('have.css', 'filter', 'invert(100%)')

    // Test dark mode in Recipe.vue
    cy.contains('Crepes').click()
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    cy.get('[data-cy="recipe-title"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="recipe-data"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="valoracion"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="comentario"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="comentarios"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="ingredientes"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="pasos"]').should('have.css', 'color', 'rgb(255, 255, 255)')
  })
  it('Testing Light Mode', () => {
    cy.visit('http://localhost:8080/elcocinillas/')

    cy.get('[data-cy="nut"]').click()
    cy.contains('Light Mode').click()

    // Test light mode in HomeView.vue
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    cy.contains('Tiempo').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Dieta').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Plato').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('minutos').should('have.css', 'color', 'rgb(43, 43, 43)')
    
    // Test light mode in RecipesView.vue
    cy.contains('Recetas').click()
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    //cy.contains('[data-cy="recipes-title"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Tiempo:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Filtros').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Dietas:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Tipos de Plato:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('nueva receta').should('have.css', 'color', 'rgb(43, 43, 43)')
    //cy.contains('[data-cy="boton-flotante"]').should('have.css', 'filter', '')

    // Test light mode in Recipe.vue
    cy.contains('Crepes').click()
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    cy.get('[data-cy="recipe-title"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="recipe-data"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="valoracion"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="comentario"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="comentarios"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="ingredientes"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="pasos"]').should('have.css', 'color', 'rgb(43, 43, 43)')
  })
})