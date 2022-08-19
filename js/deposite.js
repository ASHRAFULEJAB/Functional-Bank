

document.getElementById('deposite-btn').addEventListener('click', function(){
    
    const inputTotal = inputFieldValue('deposite-part');

    const elementTotal = elementValueById('deposite-total');

    const newDeposite = inputTotal + elementTotal;

    setTextElementValueById('deposite-total',newDeposite);

    const previousBalance = elementValueById('balance-total');
    const newBalance = previousBalance+inputTotal;
    setTextElementValueById('balance-total',newBalance);

})