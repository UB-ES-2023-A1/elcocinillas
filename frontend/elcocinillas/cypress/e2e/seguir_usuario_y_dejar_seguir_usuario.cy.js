//test correcto de prueba

describe('Test seguir usuario', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
  });
  it('Seguir a usuario correctamente', () => {
    // primero iniciamos sesion
    cy.get('input[name="mail"]').type('usuariodepruebafalsoxd@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');

    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');

    cy.wait(1000)
    cy.url().should('include', '/Crepes');
    
    //cy.get('[data-cy=imagenAgregarAmigo]').click;

    //cy.on('window:alert', (alertMessage) => {
    //  expect(alertMessage).to.equal('Has empezado a seguir a: Beatriz');
    //});
    //cy.on('window:confirm', () => true);

    //cy.url().should('include', '/Crepes');

  });
  it('Dejar de seguir a usuario correctamente', () => {
    // primero iniciamos sesion
    cy.get('input[name="mail"]').type('usuariodepruebafalsoxd@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');

    cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');

    cy.wait(1000)
    cy.url().should('include', '/Crepes');
    
    //cy.get('[data-cy=imagenAgregarAmigo]').click;

    //cy.on('window:alert', (alertMessage) => {
    //  expect(alertMessage).to.equal('Se ha eliminado a: Beatriz de tu lista de amigos');
    //});
    //cy.on('window:confirm', () => true);

    //cy.url().should('include', '/Crepes');

  });
  });