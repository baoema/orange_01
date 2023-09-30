
class Login {
    
    // Propiedades / Elementos
    // Definición de los selectores usando una función flecha
    get = {
        usernameInput: () => cy.xpath(`//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input`),
        passwordInput: () => cy.xpath(`//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input`),
        submitButton: () => cy.xpath(`//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button`),
    }
   //*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input
    // Método para ingresar el nombre de usuario
    enterUsername(type) {
        this.get.usernameInput().type(type);
    }

    // Método para ingresar la contraseña
    enterPassword(type) {
        this.get.passwordInput().type(type);
    }

    // Método para enviar el formulario de inicio de sesión
    submitLogin(type) {
        this.get.submitButton().click();
    }
}

// Se exporta una instancia de la clase Login
export const login = new Login();
