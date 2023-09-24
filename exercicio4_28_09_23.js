 do{
        var salario = parseFloat(prompt("Insira o valor do salário a ser calculado: "))
        var aumento = parseFloat(prompt("Insira o percentual de aumento desejado!"))
        var percentual = 1 + aumento / 100
        var difNovoSalario = salario * aumento / 100
        var valorAjustado = salario * percentual
            
            if (salario <= 0)
                alert("Insira um valor maior que zero!")
            
            else
            alert("O valor do aumento é de: " + difNovoSalario.toFixed(2) + ".")
            alert("O novo salário terá o valor de: " + valorAjustado.toFixed(2) + "!")
            alert("Clique em ok para calcular um novo valor!")
        } while (salario <= 0 || salario > 1)