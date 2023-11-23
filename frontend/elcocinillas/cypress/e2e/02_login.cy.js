//test correcto de prueba
describe('Test login', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/userlogin');
  });

  it('login al usuario correcto', () => {
    // buscar en el top bar el menú de login y hacer clic
    cy.contains('Log In').click();

    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    // espera a que se complete la autenticación
    cy.contains('Sesión iniciada con éxito'); // verifica que se muestra el mensaje de inicio de sesión
  });
},

//test incorrecto de prueba
describe('Test login 2', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('http://localhost:8080/elcocinillas/userlogin');
  });

  it('intento de login al usuario incorrecto', () => {
    // buscar en el top bar el menú de login y hacer clic
    cy.contains('Log In').click();

    // buscar los campos de entrada de usuario y contraseña
    cy.get('input[name="mail"]').type('usuariodepruebaerroneo@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    // espera a que se complete la autenticación
    cy.contains('Error en el inicio de sesión: email o contraseñas incorrectos'); // verifica que se muestra el mensaje de inicio de sesión
  });
}

));