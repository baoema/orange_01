require('cypress-xpath')
// Importamos la clase `login` del archivo 'login.js'
const { login } = require('../../pages/login/login.js');

// Obtenemos la URL de la página de inicio de sesión desde Cypress.env
const loginPage = Cypress.env('url').prod;

// Obtenemos el nombre de usuario y contraseña del objeto adminUser en Cypress.env
const {username, password} = Cypress.env('adminUser');

// Suite de pruebas para el inicio de sesión de usuarios
describe('User login', () => {
    // Configuramos el estado inicial antes de cada prueba
    beforeEach(() => {
        // Visitamos la página de inicio de sesión
        cy.visit(loginPage);
        
        
    });

    // Prueba para validar el inicio de sesión
    it('Validate login', () => {
        // Introducimos el nombre de usuario
        login.enterUsername(username);
        
        // Introducimos la contraseña
        login.enterPassword(password);
        
        // Enviamos el formulario de inicio de sesión
        login.submitLogin();
    });
});
