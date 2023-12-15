//Test CORRECTO:
describe('Post recetas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
    //logearse correctamente primero 
    cy.get('input[name="mail"]').type('usuariodeprueba@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:confirm', () => true);
    cy.url().should('include', '/recetas');

    cy.wait(1000);
    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();
  });
  // Se testea que al añadir una nueva receta
  // esta se añade correctamente.
  it('crear receta correcta', () => {
    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    cy.get('[data-cy=escoge_plato]').select('Ensalada');
    cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();
    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.on('window:confirm', () => true);
    //cy.url().should('include', '/recetas');
  });

//TEST INCORRECTOS de prueba:
  // Se testea que al añadir una nueva receta de forma incorrecta
  // esta se añade ?
  it('crear receta incorrecta', () => {
    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    //cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    cy.get('[data-cy=escoge_plato]').select('Ensalada');
    cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();
    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.on('window:confirm', () => true);
    cy.wait(500)
    //cy.url().should('include', '/publicarReceta');
  });

  it('crear receta incorrecta 2', () => {
    // Rellenar los campos del formulario
    //cy.get('#name').type('Ensalada Cesar');
    cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    cy.get('[data-cy=escoge_plato]').select('Ensalada');
    cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();
    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.wait(500)
    //cy.url().should('include', '/publicarReceta');
  });

  it('crear receta incorrecta 3', () => {
    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    //cy.get('[data-cy=escoge_plato]').select('Ensalada');
    cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();
    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.on('window:confirm', () => true);
    cy.wait(500)
    //cy.url().should('include', '/publicarReceta');
  });
  it('crear receta incorrecta 4', () => {
    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    cy.get('[data-cy=escoge_plato]').select('Ensalada');
    //cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();

    cy.wait(500)
    //cy.url().should('include', '/publicarReceta');
  });

  it('crear receta incorrecta 5', () => {
    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('[data-cy=escoge_dieta]').select('Omnívora'); 
    cy.get('[data-cy=escoge_plato]').select('Ensalada');
    cy.get('[data-cy=ingredientes]').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    //cy.get('[data-cy=descripcion]').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('[data-cy=dificultad]').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 
    
    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();

    cy.wait(500)
    //cy.url().should('include', '/publicarReceta');
  });
});
