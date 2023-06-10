let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach( (button) => {
    button.addEventListener("click", (e) => {
        const input = e.target.innerText;

        switch (input) {
            case '=': // show result
                string = eval(string);
                break;

            case 'AC':
                string = "";
                break;

            case '←':
                string = string.slice(0, -1);
                break;  

            default:
                string = string + input;
                break;
        }

        document.querySelector("textarea").innerHTML = string;

    });
});

// Detalle el proceso genral funciona, solo tiene error al hacer slice de un resultado y problemas de agregar numeros sobre resultados 