
const form = document.getElementById("formulario");


form.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("telefone").value;

    const tabelaAdicionar = document.querySelector('tbody')

    const newLine = `
        <tr>
            <td>${nome}</td>
            <td>${tel}</td>
        </tr>
    `

    tabelaAdicionar.innerHTML += newLine;
    
    document.getElementById("telefone").value= "";
    document.getElementById("nome").value = "";

})