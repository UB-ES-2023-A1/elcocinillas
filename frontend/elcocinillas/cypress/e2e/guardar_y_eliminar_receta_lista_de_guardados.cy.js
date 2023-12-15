describe('Tests guardar receta y dejar de guardar receta', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click();
    cy.url().should('include', '/userlogin');
    // primero iniciamos sesión
    cy.get('input[name="mail"]').type('usuariodepruebafalsoxd@gmail.com');
    cy.get('input[name="psw"]').type('123456');
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');
  });

  // Se testea que al añadir una nueva receta a la lista de recetas
  // aparezca una alert informándo al usuario de la adición y 
  // que la receta aparezca efectivamente en la lista de recetas.
  it('Guardar receta correctamente', () => {
    // ir a /Crepes
    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');
    cy.wait(1000);
    cy.url().should('include', '/Crepes');

    // dar clic a la imagen "imagenGuardarReceta"
    cy.get('[data-cy=imagenGuardarReceta]').click();

    // verificar que me sale una windows alert que pone "Se ha añadido la receta: Crepes a tu lista de recetas"
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Se ha añadido la receta: Crepes a tu lista de recetas');
    }).then(() => {
      // dar clic al boton "Aceptar" de la Windows Alert para que esta desaparezca
      cy.get('button:contains("Aceptar")').click(); // Ajusta según el contenido del botón Aceptar
    });

    // verificar que aún estamos en /Crepes
    cy.url().should('include', '/Crepes');
  });

  it('Dejar de guardar receta correctamente', () => {
    // ir a /Crepes
    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');
    cy.wait(1000);
    cy.url().should('include', '/Crepes');

    // dar clic a la imagen "imagenGuardarReceta"
    cy.get('[data-cy=imagenGuardarReceta]').click();

    // verificar que me sale una windows alert que pone "Se ha añadido la receta: Crepes a tu lista de recetas"
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Se ha eliminado la receta: Crepes de tu lista de recetas');
    }).then(() => {
      // dar clic al boton "Aceptar" de la Windows Alert para que esta desaparezca
      cy.get('button:contains("Aceptar")').click(); // Ajusta según el contenido del botón Aceptar
    });

    // verificar que aún estamos en /Crepes
    cy.url().should('include', '/Crepes');
  });

});
