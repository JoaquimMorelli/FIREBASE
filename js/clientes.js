const ref = db.ref('clientes');

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        let nome = $("#nome").val();
        let email = $("#email").val();

        if (nome === "" || email === "") {
            alert("Preencha todos os campos!");
            return;
        }

        ref.push({nome, email});
        limpar();
    });
});

function limpar() {
    $("#nome").val("");
    $("#email").val("");
    $("#nome").focus();
}