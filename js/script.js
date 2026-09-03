const PUBLIC_KEY = "HsSK3BOFV_5QFYf_i";
const SERVICE_ID = "service_262w4bm";
const TEMPLATE_ID = "template_b37i48a";


// Inicializa o EmailJS
emailjs.init({
    publicKey: PUBLIC_KEY
});


// Seleciona o formulário
const form = document.getElementById("contact-form");


// Seleciona o botão
const btn = document.getElementById("btn-enviar");


// Seleciona a mensagem de status
const statusMsg = document.getElementById("status-msg");


// Verifica se o formulário existe
if (form) {

    form.addEventListener("submit", function (event) {

        // Impede a página de recarregar
        event.preventDefault();


        // Altera o botão
        btn.innerText = "ENVIANDO...";

        btn.disabled = true;


        // Limpa mensagem anterior
        statusMsg.innerText = "";


        // Envia formulário para o EmailJS
        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form
        )

        .then(function () {

            // Mensagem de sucesso
            statusMsg.style.color = "#4ade80";

            statusMsg.innerText =
                "Mensagem enviada com sucesso!";


            // Limpa formulário
            form.reset();

        })


        .catch(function (error) {

            // Mensagem de erro
            statusMsg.style.color = "#f87171";

            statusMsg.innerText =
                "Erro ao enviar mensagem. Tente novamente.";


            // Mostra erro no console
            console.error(
                "Erro ao enviar:",
                error
            );

        })


        .finally(function () {

            // Volta botão ao estado normal
            btn.innerText = "ENVIAR";

            btn.disabled = false;

        });

    });

}