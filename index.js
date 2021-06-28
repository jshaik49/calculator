let interfa = document.getElementById('interface');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue = screenValue+buttonText;
            interfa.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            interfa.value = screenValue;
        }
        else if (buttonText == '=') {
            interfa.value = eval(screenValue);
        }
        else {
            screenValue = screenValue + buttonText;
            interfa.value = screenValue;
        }

    })
}

