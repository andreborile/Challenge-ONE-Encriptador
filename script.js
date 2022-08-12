let output = document.getElementById("myOutput")

function encriptar() {
		     
    var text = document.getElementById("myInput").value;
    const code = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"}
    var encriptado = text.replace(/[aeiou]/g, m => code[m]);
    output.innerHTML = encriptado;
}

function desencriptar() {
		     
    var text = document.getElementById("myInput").value;
    const decode = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"};
 	var desencriptado = text.replace(/ai|enter|imes|ober|ufat/g, m => decode[m]);
    output.innerHTML = desencriptado;
}

function copy() {
    output.select();
    navigator.clipboard.writeText(output.value);
    output.innerHTML = "";
}

let myButton = document.getElementById("myButton");
myButton.onclick = encriptar;

let myButton2 = document.getElementById("myButton2");
myButton2.onclick = desencriptar;

let myButton3 = document.getElementById("myButton3");
myButton3.onclick = copy;

// document.getElementById("myOutput").style.display = "initial";