const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //"chromeWebSecurity": false,
  env:{

    
    url:{
      prod:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      stg: "https://demoqa.com/login"
    },


    adminUser:{
      username: "Admin",
      password: "admin123",

      username_failure: "abcd",
      password_failure: "123456",
    },

    endpoint:{
      authlogin: ""
    }


  }

});
