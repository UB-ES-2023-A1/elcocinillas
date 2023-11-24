//test correcto de prueba
describe('Test login', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('https://ub-es-2023-a1.github.io/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
  });

  it('login al usuario correcto', () => {
    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });
    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');
  });
  it('intento de login al usuario incorrecto', () => {
    // buscar en el top bar el menú de login y hacer clic

    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodepruebaerroneo@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    // espera a que se complete la autenticación
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Error en el inicio de sesión: email o contraseñas incorrectos');
    });
  });
  it('intento de login sin poner contraseña', () => {
    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    //cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.get('[placeholder="Introduce la contraseña"]:invalid').should('exist')

    cy.url().should('include', '/userlogin');
  });

  it('intento de login sin poner email', () => {
    // buscar los campos de entrada de usuario y contraseña
    //cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    // Verifica que se muestra el mensaje de registro fallido
    cy.get('[placeholder="Introduce el correo"]:invalid').should('exist')

    cy.url().should('include', '/userlogin');
  });
  });
