function inputValue(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = parseFloat(field.value);
  field.value = '';
  return fieldValue;
}
function getTextValue(fieldId) {
  const previousField = document.getElementById(fieldId);
  const previousFieldAmount = parseFloat(previousField.innerText);
  return previousFieldAmount;
}

function updateField(fieldId, amount) {
  const newFieldAmount = getTextValue(fieldId) + amount;
  document.getElementById(fieldId).innerText = newFieldAmount;
}

function balanceUpdate(amount, isAdding) {
  const balanceAmount = getTextValue('balance-total');
  let newBalance;
  if (isAdding) {
    newBalance = balanceAmount + amount;
  }
  else {
    newBalance = balanceAmount - amount;
  }
  document.getElementById("balance-total").innerText = newBalance;
} 

document.getElementById('deposit-button').addEventListener('click', function () {
  const amount = inputValue('deposit-input');
  if (amount > 0) {
    updateField('deposit-total', amount);
    balanceUpdate(amount, true);
  }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
  const amount = inputValue('withdraw-input');
  const balance = getTextValue('balance-total');
  if (amount > 0 && amount <= balance) {
    updateField("withdraw-total", amount);
    balanceUpdate(amount, false);
  }
})