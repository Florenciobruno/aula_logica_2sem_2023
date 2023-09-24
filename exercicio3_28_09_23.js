do{
        var salario = parseFloat(prompt("Insira o valor do salário a ser calculado: "))
        var aumento = salario * 1.2

            if (salario <= 0)
                alert("Insira um valor maior que zero!")
            
            else
            alert("O novo salário terá o valor de: " + aumento + "!")
            alert("Clique em ok para calcular um novo valor!")
        } while (salario <= 0 || salario > 1)