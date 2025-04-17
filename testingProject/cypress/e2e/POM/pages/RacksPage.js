import { RACKS_URL } from "../helpers/devicetype";

class RacksPage {
  rackElevationObject = 'object.rack_elevation'; 
  colXL7 = '.col-xl-7'; 
  svgTextSelector = 'text'; 
  
  visitRacksPage() {
    cy.visit(RACKS_URL);
  }

  scrollToRackElement() {
    cy.get(this.colXL7)
      .scrollIntoView()
      .should('be.visible');
  }

  interactWithRackElevation() {
    cy.get(this.rackElevationObject)
      .should('exist')
      .should($obj => {
        expect($obj[0].contentDocument).to.not.be.null;
      })
      .then($object => {
        const doc = $object[0].contentDocument;
        const svgText = doc.querySelectorAll(this.svgTextSelector);
        const addDevice = [...svgText].find(el => el.textContent.includes('add device'));
        expect(addDevice).to.exist;
        addDevice.dispatchEvent(new MouseEvent('click', { bubbles: true}));
      });
  }
}

export const racksPage = new RacksPage();
