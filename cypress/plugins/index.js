const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

const  allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config )  =>  { 
    allureWriter(on, config ) ; 
    return config ; 
}