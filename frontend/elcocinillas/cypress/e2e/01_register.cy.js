//TESTS CORRECTOS
describe('Registro en El Cocinillas', () => {
  it('Completa el formulario de registro correctamente', () => {
    // Visita la página de registro
    cy.visit('http://localhost:8080/elcocinillas/registre');

    // Ingresa los datos en el formulario
    cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro exitoso
    cy.contains('¡Felicidades! Te has registrado en El Cocinillas').should('be.visible');
  });
});

//TESTS INCORRECTOS
describe('Registro erroneo de prueba', () => {
  it('Completa el formulario de registro incorrectamente', () => {
    // Visita la página de registro
    cy.visit('http://localhost:8080/elcocinillas/registre');

    // Ingresa los datos en el formulario
    //cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro fallido
    cy.contains('Completa este campo').should('be.visible');
  });
});

describe('Registro erroneo de prueba 2', () => {
  it('Completa el formulario de registro incorrectamente', () => {
    // Visita la página de registro
    cy.visit('http://localhost:8080/elcocinillas/registre');

    // Ingresa los datos en el formulario
    cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    //cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro fallido
    cy.contains('Completa este campo').should('be.visible');
  });
});

describe('Registro erroneo de prueba 3', () => {
  it('Completa el formulario de registro incorrectamente', () => {
    // Visita la página de registro
    cy.visit('http://localhost:8080/elcocinillas/registre');

    // Ingresa los datos en el formulario
    cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    //cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro fallido
    cy.contains('Completa este campo').should('be.visible');
  });
});

describe('Registro erroneo de prueba 4', () => {
  it('Completa el formulario de registro incorrectamente', () => {
    // Visita la página de registro
    cy.visit('http://localhost:8080/elcocinillas/registre');

    // Ingresa los datos en el formulario
    cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    //cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro fallido
    cy.contains('Completa este campo').should('be.visible');
  });
});