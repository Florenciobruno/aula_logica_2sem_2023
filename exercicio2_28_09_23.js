 do {
            var number1 = parseFloat(prompt("Digite o 1º valor!"));
            var number2 = parseFloat(prompt("Digite o 2º valor!"));
            var number3 = parseFloat(prompt("Digite o 3º valor!"));
            var pesoNota1 = number1 * 0.3
            var pesoNota2 = number2 * 0.3
            var pesoNota3 = number3 * 0.4
            var resultado = (pesoNota1 + pesoNota2 + pesoNota3);

            if  (number1 < 0 || number2 < 0 || number3 < 0)
                    alert("Insira números maiores que zero")
                else
                    console.log(resultado)

                if (number1 > 100 || number2 > 100 || number3 > 100)
                    alert("Insira números menores que 100")
           

                if (resultado > 0)
                    alert("A sua média é de: " + resultado.toFixed(2));
                else (resultado != 0)
                    alert("Clique em para reiniciar o cálculo!")

                } while ((number1 < 0 || number2 < 0 || number3 < 0) || (number1 > 100 || number2 > 100 || number3 > 100) || (resultado > 0))
