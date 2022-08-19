document.getElementById('withdraw-btn').addEventListener('click',function(){

    const newWithdrawAmount = inputFieldValue('withdraw-part');
    const newWithdrawAmountValue = elementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount+newWithdrawAmountValue;
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const newBalanceAmount = elementValueById('balance-total');
    const newBalance = newBalanceAmount-newWithdrawAmount;
    setTextElementValueById('balance-total',newBalance);

})