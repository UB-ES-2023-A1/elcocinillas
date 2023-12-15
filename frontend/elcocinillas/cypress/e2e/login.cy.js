//test correcto de prueba
describe('Test login', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
  });
  // Se testea que al intrducir correctamente los datos de usuario y contraseña, 
  // aparezca un alert informando al usuario y
  // se inicie sesión en toda la página.
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
  // Se testea que al intrducir incorrectamente los datos de usuario y contraseña, 
  // aparezca un alert informando al usuario y
  // NO se inicie sesión.
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
  // Se testea que al intentar iniciar sesión sin colocar contraseña 
  // aparezca un alert informando al usuario y
  // NO se inicie sesión.
  it('intento de login sin poner contraseña', () => {
    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    //cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.get('[placeholder="Introduce la contraseña"]:invalid').should('exist')

    cy.url().should('include', '/userlogin');
  });
  // Se testea que al intentar iniciar sesión sin colocar correo 
  // aparezca un alert informando al usuario y
  // NO se inicie sesión.
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
