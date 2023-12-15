//TESTS GENERALES
describe('Get recetas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
  });

  // Se testea que al aplicar alguno de los filtros las recetas que aparezcan
  // a continuación estén filtradas correctamente.
  it('Seleccionar opciones en el filtro', () => {
    // Seleccionar tiempo
    cy.get('#slider.slider').invoke('val', 15).trigger('input');
    
    // Seleccionar dieta
    //cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 

    // Seleccionar plato
    //cy.get('[data-cy=escoge_plato]').select('Ensalada');

    // Hacer clic en el botón "Ver Recetas"
    cy.get('.to-recipes').click();

    // Verificar que la URL se haya cambiado a la página de recetas
    cy.url().should('include', '/recetas');

    // Verificar la existencia de las dos card-text
    cy.get('.card-text').should('have.length.greaterThan', 1);
  });
});

describe('Get todas las recetas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
  });
  // Se testea que al no aplicar ningún filtro
  // aparezcan todas las recetas.
  it('No seleccionar filtros', () => {
    // Seleccionar tiempo máximo (para que salgan todas las recetas, q tendrán un tiempo menor o igual, por lo que han de salir así sí o sí)
    cy.get('#slider').invoke('val', 60).trigger('input');
    
    // Seleccionar dieta

    cy.get('#slider').should('have.value', 60);
  
    // Hacer clic en el botón "Ver Recetas"
    cy.get('.to-recipes').click();

    // Verificar que la URL se haya cambiado a la página de recetas
    cy.url().should('include', '/recetas');

    cy.get('.card-text').should('have.length.greaterThan', 1);

  });
});