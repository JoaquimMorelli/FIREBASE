const ref = db.ref('fornecedores');

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        let nome = $("#nome").val();
        let cnpj = $("#cnpj").val();
        let email = $("#email").val();

        if (nome === "" || email === "" || cnpj === "") {
            alert("Preencha todos os campos!");
            return;
        }

        ref.push({nome, email, cnpj});
        limpar();
    });
});

function limpar() {
    $("#nome").val("");
    $("#email").val("");
    $("#cnpj").val("");
    $("#nome").focus();
}