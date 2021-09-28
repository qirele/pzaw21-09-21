form = document.querySelector('#rejestruj');
login = document.querySelector('#login');
haslo = document.querySelector('#haslo');
hasloAgain = document.querySelector('#hasloAgain');

form.addEventListener('click', function(){
    if (haslo.value == hasloAgain.value){
        alert('prawidlowe hasla')
    }
    else{
        alert('nieprawidlowe haslo')
    }
});
