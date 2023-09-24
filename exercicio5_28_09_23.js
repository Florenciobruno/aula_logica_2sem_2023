var salarioBase = parseFloat(prompt("Insira o valor do salário a ser calculado"));
        var salarioIr = salarioBase * 0.93
        var salarioBonus = salarioBase * 0.05
        
        if (salarioBase <= 0)
            alert("Insira um valor maior que zero")
        else(salarioBase > 0)
            alert(salarioIr + salarioBonus)