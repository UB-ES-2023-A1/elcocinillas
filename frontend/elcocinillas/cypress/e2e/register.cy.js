//TESTS CORRECTOS
describe('Registro en El Cocinillas', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/registre');
  });
  // Se testea que al rellenar el formulario de registro y hacer submit
  // aparezca una alerta informando al usuario que el proceso ha sido exitoso.
  it('Completa el formulario de registro correctamente', () => {
    // Ingresa los datos en el formulario
    cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
    cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
    cy.get('[placeholder="Introduce la contraseña"]').type('123456');
    cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');

    // Envía el formulario
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro exitoso
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('¡Felicidades! Te has registrado en El Cocinillas');
    });
  });
    //TESTS INCORRECTOS
    it('Completa el formulario de registro incorrectamente', () => {
      // Ingresa los datos en el formulario
      //cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
      cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
      cy.get('[placeholder="Introduce la contraseña"]').type('123456');
      cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');
  
      // Envía el formulario
      cy.get('form').submit();
  
      // Verifica que se muestra el mensaje de registro fallido
      cy.get('[placeholder="Introduce tu nombre de usuario"]:invalid').should('exist')
    });

    it('Completa el formulario de registro incorrectamente', () => {
      // Ingresa los datos en el formulario
      cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
      //cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
      cy.get('[placeholder="Introduce la contraseña"]').type('123456');
      cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');
  
      // Envía el formulario
      cy.get('form').submit();
  
      // Verifica que se muestra el mensaje de registro fallido
      cy.get('[placeholder="Introduce el correo"]:invalid').should('exist')
    });
    it('Completa el formulario de registro incorrectamente', () => {
      // Ingresa los datos en el formulario
      cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
      cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
      //cy.get('[placeholder="Introduce la contraseña"]').type('123456');
      cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');
  
      // Envía el formulario
      cy.get('form').submit();
  
      // Verifica que se muestra el mensaje de registro fallido
      cy.get('[placeholder="Introduce la contraseña"]:invalid').should('exist')
    });
    it('Completa el formulario de registro incorrectamente', () => {
      // Ingresa los datos en el formulario
      cy.get('[placeholder="Introduce tu nombre de usuario"]').type('Asier');
      cy.get('[placeholder="Introduce el correo"]').type('testRegFrontend@gmail.com');
      cy.get('[placeholder="Introduce la contraseña"]').type('123456');
      //cy.get('[placeholder="Introduce de nuevo la contraseña"]').type('123456');
  
      // Envía el formulario
      cy.get('form').submit();
  
      // Verifica que se muestra el mensaje de registro fallido
      cy.get('[placeholder="Introduce de nuevo la contraseña"]:invalid').should('exist')
    });
  });