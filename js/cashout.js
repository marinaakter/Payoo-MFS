document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    const cashOut = document.getElementById('input-cash-out').value
    const pinNumber = document.getElementById('input-cash-out-pin').value
    console.log(cashOut, pinNumber);
    if(pinNumber === '123'){
        const balance = parseFloat(document.getElementById("account-balance").innerText)
        updatedBalance = balance - cashOut
        document.getElementById('account-balance').innerText = updatedBalance
        
    }
    else{
        alert("Failed to Cash Out! Please try again.")
    }
})