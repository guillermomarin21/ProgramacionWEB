function sumar()
{
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    let total = parseInt(n1) + parseInt(n2); 
    let mensaje =" el total es: " + total;
    alert(mensaje);
    document.getElementById("lblmensaje").innerHTML = mensaje;
}