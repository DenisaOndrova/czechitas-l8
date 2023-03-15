//1. úkol:

const justFood = (numberOfPeople) => {
    return `catering provided by Just Food for ${numberOfPeople} people costs ${Math.round(numberOfPeople * 95)} CZK`;
  };
  
  const yourMama = (numberOfPeople) => {
    return `catering provided by Your Mama for ${numberOfPeople} people costs ${Math.round(numberOfPeople * 250)} CZK`;
  };
  
  const flavourHaven = (numberOfPeople) => {
    return `catering provided by Flavour Haven for ${numberOfPeople} people costs ${Math.round(numberOfPeople * 600)} CZK`;
  };
  
  const createEvent = (eventName, numberOfPeople, catering) => {
    return `${eventName} event with ${catering(numberOfPeople)}`;
  };
  
  document.body.innerHTML += createEvent('President´s inauguration', 100, flavourHaven);
  

  //2. úkol

  