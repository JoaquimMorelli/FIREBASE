const ref = db.ref('categorias');

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        let nome = $("#nome").val();
        let informacoes = $("#informacoes").val();

        if (nome === "" || informacoes === "") {
            alert("Preencha todos os campos!");
            return;
        }

        ref.push({nome, informacoes});
        limpar();
    });
});

function limpar() {
    $("#nome").val("");
    $("#informacoes").val("");
    $("#nome").focus();
}