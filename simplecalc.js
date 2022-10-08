
  // This code block contains values used in the computations.  These are 
  // data and subject to change as new/better data becomes available.  If
  // this data were especially dynamic we could pull this from an API, but
  // I don't expect that to be needed.  It should be sufficient to change
  // these as we learn more, which shouldn't be too frequent an event.

  const avgHomeValue = 628952; // Average house value
  const avgHomeFirstYearIncrease = 258;
  const avgHomeAverageYearlyIncrease = 732;



  // This code block contains actual code, subject to change only
  // by a JS programer.  There's nothing specific to the HTML content of
  // the page here with the exception of the header of the table.
  // I left that in here because that is coupled with the content of the table.
  // That is: change the table's generated columns and the header must also be changed.  

  const moneyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  function computeValuesTo(homeValueElementName, firstYearIncreaseElementName, averageYearlyIncreaseElementName)
  {
    // Should these next two data be validated?
    const myHomeValue = document.getElementById(homeValueElementName).value; // Is this a number?
    const ratio = myHomeValue / avgHomeValue; // Is this a number?

    let firstYearIncreaseElement = document.getElementById(firstYearIncreaseElementName);
    firstYearIncreaseElement.innerHTML = moneyFormat.format(avgHomeFirstYearIncrease * ratio);

    let averageYearlyIncreaseElement = document.getElementById(averageYearlyIncreaseElementName);
    averageYearlyIncreaseElement.innerHTML = moneyFormat.format(avgHomeAverageYearlyIncrease * ratio);
  }


  // Set up initial values: Average home value, payment tables, etc.
  function populateInitialValues(avgHomeValueElementName, homeValueElementName)
  {
    // Put average home price on the page
    let avgHomeValueElement = document.getElementById(avgHomeValueElementName);
    avgHomeValueElement.innerHTML = moneyFormat.format(avgHomeValue);

    // Set the initial value of "my home value" to the average home price
    let myHomeValueElement = document.getElementById(homeValueElementName);
    myHomeValueElement.value = avgHomeValue;
  }

