const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    env: {
      runOnlyOnce: true
    },
    experimentalShadowDomSupport: true,
    setupNodeEvents(on, config) {
      // Registrujemo custom task za zatvaranje Cypress-a
      on('task', {
        closeCypress() {
          // Ovaj kod završava proces i zatvara Cypress
          process.exit(0); // 0 znači uspešan izlaz
          return null;
        }
      });
      
      // Možete dodati dodatne node event listener-e ako su vam potrebni
    },
  },
});
