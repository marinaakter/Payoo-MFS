document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    const cashOut = getInputFieldById('input-cash-out')
    const pinNumber = getInputFieldById('input-cash-out-pin')
    if(pinNumber === 123){
        const balance = getTextFieldById('account-balance')
        updatedBalance = balance - cashOut
        document.getElementById('account-balance').innerText = updatedBalance
        
    }
    else{
        alert("Failed to Cash Out! Please try again.")
    }
})