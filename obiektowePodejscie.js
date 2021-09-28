function rejestruj(formularz){
    if (formularz.haslo.value == formularz.hasloAgain.value)
        alert('prawidlowe hasla');
    else
        alert('nieprawidlowe hasla');
}