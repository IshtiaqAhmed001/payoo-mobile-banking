const loginBtn= document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

const accountNumber = document.getElementById('account-number').value;

const pinNumber = document.getElementById('pin-number').value;

const convertedPin = parseInt(pinNumber);

if(accountNumber.length===11){
   if(convertedPin===1234){
    window.location.href='./main.html'
   }
   else{
    alert('Incorrect Pin!');
   }
}
else{
    alert('Invalid account number');
}

})