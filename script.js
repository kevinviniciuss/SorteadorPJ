const adicionar = document.getElementById("adicionar");

adicionar.addEventListener("click", function(){
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;

    const resultado = document.getElementsByClassName("card-numeros")[0];

    resultado.innerHTML = "";

    resultado.innerHTML = `
    <div class="resultadoNumeros">
        <h1>NÚMEROS</h1>
        <h3>Entre ${inicio} e ${fim}</h3>
    </div>`;
})