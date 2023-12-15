describe('Modificar datos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
  });
  // Se testea que al cambiar la contraseña
  // se cambie efectivamente.
  it('Cambiar contraseña de la cuenta', () => {
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "Perfil" y darle clic 
    cy.get('[data-cy=clic_perfil]').click(); 

    // Verificar que la URL se haya cambiado a la página de perfil
    cy.url().should('include', '/perfil');

    // Indicar correo
    cy.get('[data-cy=email_modificar]').type('usuariodeprueba@gmail.com');
    
    // Indicar contraseña
    cy.get('[data-cy=psswd_modificar]').type('1234567890');
    
    //cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:8080/elcocinillas/recetas');

    //cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');
  });
  // Se testea que al cambiar la contraseña
  // se cambie efectivamente.
  it('Cambiar contraseña de la cuenta de vuelta', () => {
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "Perfil" y darle clic 
    cy.get('[data-cy=clic_perfil]').click(); 

    // Verificar que la URL se haya cambiado a la página de perfil
    cy.url().should('include', '/perfil');
    // Indicar correo
    cy.get('[data-cy=email_modificar]').type('usuariodeprueba@gmail.com');
    
    // Indicar contraseña
    cy.get('[data-cy=psswd_modificar]').type('123456');
    
    //cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:8080/elcocinillas/recetas');
    //cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');
  });

  //TESTS INCORRECTOS
  /*it('Cambiar contraseña de una cuenta que no existe', () => {
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "Perfil" y darle clic 
    cy.get('[data-cy=clic_perfil]').click(); 

    // Verificar que la URL se haya cambiado a la página de perfil
    cy.url().should('include', '/perfil');
    // Indicar correo
    cy.get('[data-cy=email_modificar]').type('algorandom@gmail.com');
    
    // Indicar contraseña
    cy.get('[data-cy=psswd_modificar]').type('12345678');
    
    cy.get('button[type="submit"]').click();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/perfil');
  });*/
  // Se testea que al intentar modificar datos sin colocar un correo
  // no se permita al usuario modificar los datos hasta introducir correo.
  it('Intentar modificar datos sin poner correo', () => {
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "Perfil" y darle clic 
    cy.get('[data-cy=clic_perfil]').click(); 

    // Verificar que la URL se haya cambiado a la página de perfil
    cy.url().should('include', '/perfil');
    // Indicar correo
    //cy.get('[data-cy=email_modificar]').type('usuariodepruebaquenoexiste@gmail.com');
    
    // Indicar contraseña
    cy.get('[data-cy=psswd_modificar]').type('12345678');
    
    cy.get('button[type="submit"]').click();

    cy.wait(500)
    cy.url().should('include', '/perfil');
  });
  // Se testea que al intentar modificar datos sin colocar contraseña
  // no se permita al usuario modificar los datos hasta introducir contraseña.
  it('Intentar modificar datos sin poner contraseña', () => {
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "Perfil" y darle clic 
    cy.get('[data-cy=clic_perfil]').click(); 

    // Verificar que la URL se haya cambiado a la página de perfil
    cy.url().should('include', '/perfil');
    // Indicar correo
    cy.get('[data-cy=email_modificar]').type('usuariodepruebaquenoexiste@gmail.com');
    
    // Indicar contraseña
    //cy.get('[data-cy=psswd_modificar]').type('12345678');
    
    cy.get('button[type="submit"]').click();

    cy.wait(500)
    cy.url().should('include', '/perfil');
  });
});
