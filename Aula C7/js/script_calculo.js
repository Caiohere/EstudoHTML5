function calculadora()
{
    document.getElementById('tot_desconto').value = parseFloat(document.getElementById('valor').value) *
    parseFloat(document.getElementById('perc_desconto').value) / 100;


    document.getElementById('resultado').value = parseFloat(document.getElementById('valor').value) -
    parseFloat(document.getElementById('tot_desconto').value);


    document.getElementById("resultado").style.color = "red";
    document.getElementById("resultado").style.backgroundColor = "yellow";
}