let selectedTip = 0;

document.querySelectorAll('.tip-selector').forEach((element) => {
    element.addEventListener('click', (event) => {
        selectedTip = event.target.innerHTML;
        selectedTip = parseFloat(selectedTip.replace('%', '')) / 100;

        calculateTipPerPerson();
    });
});


function calculateTipPerPerson() {

    const bill_Input = parseFloat(document.querySelector('.js-number-input1').value);
    const peopleNo = (document.querySelector('.js-number-of-people').value);

    const tipPerPerson = (bill_Input * selectedTip);

    const tipPerPersonElement = document.querySelector('.js-amount');
    const totalValue = document.querySelector('.js-total-amount');

    if (peopleNo != 0) {
        totalValue.innerHTML = ((bill_Input / peopleNo) + tipPerPerson).toFixed(2);
    }

    if (tipPerPersonElement) {
        tipPerPersonElement.innerText = tipPerPerson.toFixed(2);
    }
}

document.querySelector('.js-number-input1').addEventListener('input', calculateTipPerPerson);
document.querySelector('.js-number-of-people').addEventListener('input', calculateTipPerPerson);

const resetButton = document.querySelector('.js-reset-button');

resetButton.addEventListener('click', () => {
    document.querySelector('.js-number-input1').value = '';
    document.querySelector('.js-number-of-people').value = '';

    document.querySelector('.js-amount').innerText = '0.00';
    document.querySelector('.js-total-amount').innerText = '0.00';
});