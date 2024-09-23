document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    const cashOut = getInputFieldById('input-cash-out')
    const pinNumber = getInputFieldById('input-cash-out-pin')
    if(isNaN(cashOut)){
        alert("Failed to Cash Out")
        return
    }
    if(pinNumber === 123){
        const balance = getTextFieldById('account-balance')
        if(cashOut > balance){
            alert("you do not have enough money to cash out")
            return
        }
        updatedBalance = balance - cashOut
        document.getElementById('account-balance').innerText = updatedBalance

        //transaction history
        const div = document.createElement('div')
        div.classList.add('text-red-500')
        div.innerHTML = `
            <div class="flex items-center space-x-3 bg-red-600 text-white rounded-lg p-3 m-auto">
            <h6 class="text-lg font-bold">Cash Out</h6>
            <p>${cashOut} withdraw. New Balance ${updatedBalance} </p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)

        
    }
    else{
        alert("Failed to Cash Out! Please try again.")
    }
})