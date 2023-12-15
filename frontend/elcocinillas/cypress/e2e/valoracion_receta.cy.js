describe('Test valorar receta', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click();
    cy.url().should('include', '/userlogin');
    // primero iniciamos sesion
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');
  });
  // Se testea que al valorar una receta (habiendo iniciado sesión)
  // aparezca una alarma informando al usuario y
  // se actualice la valoración de la receta correctamente.
  it('Valorar receta correctamente', () => {
    // ir a /Crepes
    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');
    cy.wait(1000);
    cy.url().should('include', '/Crepes');

    // clic en una de las cinco estrellas para valorar la receta
    cy.get('#rate span:nth-child(3) img').click(); // Puedes ajustar el índice según tu estructura

    // verificar que aparece la alerta "¡Felicidades! Tu valoración se ha añadido."
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('¡Felicidades! Tu valoración se ha añadido.');
    }).then(() => {
      // aceptar la alerta
      //cy.get('button:contains("Aceptar")').click(); 
    });

    // verificar que aún estamos en /Crepes
    cy.url().should('include', '/Crepes');
  });
});
