let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            // Clear the entire display
            display.innerText = '0';
        } else if (buttonText === '←') {
            // Remove last character (backspace)
            if (display.innerText.length === 1) {
                display.innerText = '0'; // Reset to 0 if nothing left
            } else {
                display.innerText = display.innerText.slice(0, -1);
            }
        } else if (buttonText === '=') {
            // Evaluate the expression and display result
            try {
                display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
            } catch {
                display.innerText = 'Error'; // Handle invalid expressions
            }
        } else if (buttonText === '.') {
            // Handle the decimal point, allowing only one decimal point per number
            let currentInput = display.innerText;
            if (!currentInput.includes('.')) {
                display.innerText += buttonText;
            }
        } else if (buttonText === '00') {
            // Append 00 when the 00 button is pressed
            display.innerText += '00';
        } else {
            // If display is still '0', replace it with the new input
            if (display.innerText === '0') {
                display.innerText = buttonText;
            } else {
                display.innerText += buttonText; // Append the clicked button's text to the display
            }
        }
    });
});
