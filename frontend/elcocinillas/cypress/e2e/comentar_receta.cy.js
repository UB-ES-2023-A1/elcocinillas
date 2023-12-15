describe('Tests comentar receta', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click();
    cy.url().should('include', '/userlogin');
    // primero iniciamos sesion
    cy.get('input[name="mail"]').type('usuariodepruebafalsoxd@gmail.com');
    cy.get('input[name="psw"]').type('123456');
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');
  });

  // Se testea que al añadir un comentario nuevo a una receta 
  // salga una alerta informando al usuario de que se ha añadido el comentario y
  // que el comentario añadido se encuentra en la sección inferior de 'Comentarios: ' de Recipe.vue.
  it('Comentar receta correctamente', () => {
    // ir a /Crepes
    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');
    cy.wait(1000);
    cy.url().should('include', '/Crepes');

    // escribir en el textarea "comment" un comentario que diga "Hola, esto es un test de comentario!"
    cy.get('.comment').type('Hola, esto es un test de comentario!');

    // darle clic al boton de "Añadir Comentario"
    cy.get('#canComment').click();

    // verificar que me sale una windows alert que pone "¡Felicidades! Tu comentario se ha añadido."
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('¡Felicidades! Tu comentario se ha añadido.');
    }).then(() => {
      // darle clic al boton "Aceptar" para quitar la windows alert
      cy.get('button:contains("Aceptar")').click(); 
    });

    // verificar que aún estamos en /Crepes
    cy.url().should('include', '/Crepes');
  });
});
