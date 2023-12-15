describe('Darkmode', () => {
  /* 
    Testing that, after activating 'Dark Mode', 
    all components in HomeView, RecipesView, and Recipe
    has the expected colors.
  */
  it('Testing Dark Mode', () => {
    cy.visit('http://localhost:8080/elcocinillas/')

    cy.get('[data-cy="nut"]').click()
    cy.contains('Dark Mode').click()

    /* Test dark mode in HomeView.vue */
    // Main div of HomeView has white font and transparent background:
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of HomeView have white font:
    cy.contains('Tiempo').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Dieta').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Plato').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('minutos').should('have.css', 'color', 'rgb(255, 255, 255)')
    
    // Test dark mode in RecipesView.vue
    cy.contains('Recetas').click() // Travel to RecipesView
    // Main div of RecipesView has white font and transparent background:
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of RecipesView have white font:
    cy.contains('Recetas').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Tiempo:').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Filtros').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Dietas:').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.contains('Tipos de Plato:').should('have.css', 'color', 'rgb(255, 255, 255)')
    // 'Boton-flotante''s color is currently inverted:
    //cy.contains('[data-cy="boton-flotante"]').should('have.css', 'filter', 'invert(100%)')

    // Test dark mode in Recipe.vue
    cy.contains('Crepes').click() // Travel to '/receta/Crepes'
    // Main div of Recipe has white font and transparent background:
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'color','rgb(255, 255, 255)')
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of RecipesView have white font:
    cy.get('[data-cy="recipe-title"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="recipe-data"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="valoracion"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="comentario"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="comentarios"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="ingredientes"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-cy="pasos"]').should('have.css', 'color', 'rgb(255, 255, 255)')
  })
  /* 
    Testing that, after activating 'Light Mode', 
    all components in HomeView, RecipesView, and Recipe
    has the expected colors.
  */
  it('Testing Light Mode', () => {
    cy.visit('http://localhost:8080/elcocinillas/')

    cy.get('[data-cy="nut"]').click()
    cy.contains('Light Mode').click()

    // Test light mode in HomeView.vue
    // Main div of HomeView has #2b2b2b font and transparent background:
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-HomeView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of HomeView have #2b2b2b font:
    cy.contains('Tiempo').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Dieta').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Plato').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('minutos').should('have.css', 'color', 'rgb(43, 43, 43)')
    
    // Test light mode in RecipesView.vue
    cy.contains('Recetas').click()
    // Main div of RecipesView has #2b2b2b font and transparent background:
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-RecipesView"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of RecipesView have #2b2b2b font:
    //cy.contains('[data-cy="recipes-title"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Tiempo:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Filtros').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Dietas:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('Tipos de Plato:').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.contains('nueva receta').should('have.css', 'color', 'rgb(43, 43, 43)')
    // 'Boton-flotante''s color is currently NOT inverted:
    //cy.contains('[data-cy="boton-flotante"]').should('have.css', 'filter', '')

    // Test light mode in Recipe.vue
    cy.contains('Crepes').click()
    // Main div of Recipe has #2b2b2b font and transparent background:
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'color','rgb(43, 43, 43)')
    cy.get('[data-cy="main-Recipe"]').should('have.css', 'background-color','rgba(0, 0, 0, 0)')
    // Text from different sections of Recipe have #2b2b2b font:
    cy.get('[data-cy="recipe-title"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="recipe-data"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="valoracion"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="comentario"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="comentarios"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="ingredientes"]').should('have.css', 'color', 'rgb(43, 43, 43)')
    cy.get('[data-cy="pasos"]').should('have.css', 'color', 'rgb(43, 43, 43)')
  })
})