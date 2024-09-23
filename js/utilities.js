/* Common shared function here */

function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber
}

function showSectionById(id){
    document.getElementById('addMoney-form').classList.add('hidden')
    document.getElementById('cashout-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}