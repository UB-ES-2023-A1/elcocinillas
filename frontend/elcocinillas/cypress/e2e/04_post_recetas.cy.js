//Test CORRECTO:
describe('Post receta correcta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear receta', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('#tipoReceta').select('Omnívora');
    cy.get('#classeReceta').select('Ensalada');
    cy.get('#ingredientesReceta').type('Ensalada Cesar: 200 g lechuga romana, 40 g queso parmesano, 1/2 pechuga de pollo, Sal, Pimienta negra, Salsa César y Picatostes de pan. Salsa Cesar: 50 g de anchoa, Zumo de medio limón, 1 cucharada de mostaza de Dijon, una cucharada de Salsa Worcester, 1 yema de huevo, 1/2 dientes de ajo y Aceite de oliva virgen o virgen extra');
    cy.get('#pasosReceta').type('1. Salpimentamos la pechuga de pollo y hacemos a la plancha, reservamos. 2.Lavamos la lechuga, podéis utilizar la variedad que os guste, pero si queréis hacer la más típica utilizad lechuga romana. La secamos y picamos finamente. 3.Ponemos en la fuente o plato la lechuga, encima la pechuga cortada en trozos pequeños o en tiras, unos picatostes de pan y unos trocitos de queso parmesano. 4.Incorporamos un poco de salsa, mezclamos y rallamos por encima queso parmesano.');
    cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();

    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.url().should('include', '/recetas');
  });
});

//TEST INCORRECTO de prueba:
describe('Post receta sin tipoReceta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear mal receta', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    //cy.get('#tipoReceta').select('Omnívora');
    cy.get('#classeReceta').select('Ensalada');
    cy.get('#ingredientesReceta').type('Prueba incorrecta');
    cy.get('#pasosReceta').type('Prueba incorrecta');
    cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    // Busca el botón de "Publicar" y haz clic en él
    cy.get('button[type="submit"]').click();

    // Verificar que nos redirigimos a la página de recetas (ajusta el selector según tu caso)
    cy.url().should('include', '/recetas');
  });
});
describe('Post receta sin claseReceta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear mal receta 2', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('#tipoReceta').select('Omnívora');
    //cy.get('#classeReceta').select('Ensalada');
    cy.get('#ingredientesReceta').type('Prueba incorrecta');
    cy.get('#pasosReceta').type('Prueba incorrecta');
    cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/recetas');
  });
});

describe('Post receta sin ingredientesReceta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear mal receta 3', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('#tipoReceta').select('Omnívora');
    cy.get('#classeReceta').select('Ensalada');
    //cy.get('#ingredientesReceta').type('Prueba incorrecta');
    cy.get('#pasosReceta').type('Prueba incorrecta');
    cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/recetas');
  });
});

describe('Post receta sin pasosReceta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear mal receta 4', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('#tipoReceta').select('Omnívora');
    cy.get('#classeReceta').select('Ensalada');
    cy.get('#ingredientesReceta').type('Prueba incorrecta');
    //cy.get('#pasosReceta').type('Prueba incorrecta');
    cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/recetas');
  });
});

describe('Post receta sin dificultadReceta', () => {
  before(() => {
    // visitar al url de la página principal
    cy.visit('http://localhost:8080/elcocinillas/');
    // espera a que se cargue la página
    cy.wait(1000); 
  });

  it('crear mal receta 5', () => {
    // buscar el botón de "Ver Recetas" y darle clic
    cy.get('.to-recipes').click();

    // Buscar el botón que pone "+" y darle clic (que es el botón que en el código es llamado boton-flotante)
    cy.get('#boton-flotante').click();

    // Rellenar los campos del formulario
    cy.get('#name').type('Ensalada Cesar');
    cy.get('#tipoReceta').select('Omnívora');
    cy.get('#classeReceta').select('Ensalada');
    cy.get('#ingredientesReceta').type('Prueba incorrecta');
    cy.get('#pasosReceta').type('Prueba incorrecta');
    //cy.get('#dificultadReceta').select('2');
    cy.get('#myRange').invoke('val', '15').trigger('input'); 
    //cy.get('#exampleFormControlFile1').attachFile('ruta/de/tu/imagen.jpg'); 

    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/recetas');
  });
});
