/* 

// step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault(); // step2: prevent relaod

    //get the phone number
    const phoneNumber = document.getElementById('phone-number').value
    const idNumber = document.getElementById('pin-number').value

    if(phoneNumber === '01788785684' && idNumber === '1234'){
        console.log("You're logged in");
        
    }
    else{
        console.log('Wrong credentials');
        
    }
    
})

*/

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    if(phoneNumber === '017' && pinNumber === '123'){
        console.log("You're logged in");
        window.location.href = './home.html'
        
    }
    else{
        alert('Wrong credentials');
        
    }
    
})