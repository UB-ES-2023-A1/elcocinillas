//TESTS GENERALES
describe('Get recetas usando filtros correctamente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
  });

  it('Seleccionar opciones en el filtro', () => {
    // Seleccionar tiempo
    cy.get('#slider').invoke('val', 15).trigger('input');
    
    // Seleccionar dieta
    cy.contains('.main-li', 'Vegetariana').click();

    // Seleccionar plato
    cy.contains('.main-li', 'Postre').click();

    // Verificar
    cy.get('#slider').should('have.value', 15);
    cy.contains('.main-li', 'Vegetariana').should('have.css', 'background-color', '#76ded9');
    cy.contains('.main-li', 'Postre').should('have.css', 'background-color', '#76ded9');

    // Hacer clic en el botón "Ver Recetas"
    cy.get('.to-recipes').click();

    // Verificar que la URL se haya cambiado a la página de recetas
    cy.url().should('include', '/recetas');

    // Verificar la existencia de las dos card-text
    cy.get('.card-text').should('have.length', 2);
    cy.contains('.card-text', 'Crepes').should('exist');
    cy.contains('.card-text', 'Tarta de queso de la Viña').should('exist');
  });
});

describe('Get todas las recetas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
  });

  it('No seleccionar filtros', () => {
    // Seleccionar tiempo máximo (para que salgan todas las recetas, q tendrán un tiempo menor o igual, por lo que han de salir así sí o sí)
    cy.get('#slider').invoke('val', 60).trigger('input');
    
    // Seleccionar dieta
    //cy.contains('.main-li', 'Vegetariana').click();

    // Seleccionar plato
    //cy.contains('.main-li', 'Postre').click();

    // Verificar 
    cy.get('#slider').should('have.value', 60);
    //cy.contains('.main-li', 'Vegetariana').should('have.css', 'background-color', '#76ded9');
    //cy.contains('.main-li', 'Postre').should('have.css', 'background-color', '#76ded9');

    // Hacer clic en el botón "Ver Recetas"
    cy.get('.to-recipes').click();

    // Verificar que la URL se haya cambiado a la página de recetas
    cy.url().should('include', '/recetas');

    // Verificar la existencia de las cinco card-text (a día 23/11/23 solo hay cinco card-text cuando seleccionas todas las recetas)
    cy.get('.card-text').should('have.length', 5);
    cy.contains('.card-text', 'Crepes').should('exist');
    cy.contains('.card-text', 'Tarta de queso de la Viña').should('exist');
    cy.contains('.card-text', 'Hamburguesa de Garbanzos').should('exist');
    cy.contains('.card-text', 'Pato Pekin').should('exist');
    cy.contains('.card-text', 'Sushi').should('exist');
  });
});