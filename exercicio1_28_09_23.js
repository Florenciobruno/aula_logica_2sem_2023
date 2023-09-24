 alert("Para obter seu resultado insira os valores nos respectivos campos com notas de 0 a 100!");
            
            do {
            var number1 = parseFloat(prompt("Digite o 1º valor!"));
            var number2 = parseFloat(prompt("Digite o 2º valor!"));
            var number3 = parseFloat(prompt("Digite o 3º valor!"));
            var soma = (number1 + number2 + number3);
            var resultado = (soma / 3);
           
               if  (number1 < 0 || number2 < 0 || number3 < 0)
                    alert("Insira números maiores que zero")
                else
                    console.log(resultado)

                if (number1 > 100 || number2 > 100 || number3 > 100)
                    alert("Insira números menores que 100")
            
                if(soma > resultado)
                    alert("A sua média é de: " + resultado.toFixed(2));
                    alert("Clique em OK para reiniciar a página")

                } while ((number1 < 0 || number2 < 0 || number3 < 0) || (number1 > 100 || number2 > 100 || number3 > 100) || number1 >= 1)