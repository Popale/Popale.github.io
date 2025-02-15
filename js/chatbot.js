document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");

    // Respuestas predefinidas del chatbot
    const responses = {
        "hola": "¡Hola! ¿Cómo puedo ayudarte?",
        "¿cómo estás?": "Soy solo un bot, pero estoy listo para ayudarte. 😊",
        "¿qué sabes hacer?": "Puedo responder preguntas básicas sobre programación. ¡Prueba escribiendo algo!",
        "adiós": "¡Hasta luego! 👋",
        "default": "No entiendo esa pregunta. 🤔 Intenta preguntarme otra cosa."
    };

    // Función para abrir/cerrar el chatbot
    chatToggle.addEventListener("click", () => {
        chatContainer.classList.toggle("open");
    });

    closeChat.addEventListener("click", () => {
        chatContainer.classList.remove("open");
    });

    // Enviar mensaje con botón
    sendBtn.addEventListener("click", sendMessage);

    // Enviar mensaje con tecla Enter
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    // Función para procesar el mensaje del usuario
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        appendMessage("user", message);
        userInput.value = "";

        // Simula "Escribiendo..."
        setTimeout(() => {
            appendMessage("bot", "Escribiendo...");
        }, 500);

        setTimeout(() => {
            chatMessages.lastChild.textContent = responses[message.toLowerCase()] || responses["default"];
        }, 1200);
    }

    // Función para agregar mensajes al chat
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;
        messageDiv.style.opacity = "0";
        messageDiv.style.transform = "translateY(10px)";
        chatMessages.appendChild(messageDiv);

        // Animación de aparición del mensaje
        setTimeout(() => {
            messageDiv.style.opacity = "1";
            messageDiv.style.transform = "translateY(0)";
        }, 100);

        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll hacia el último mensaje
    }
});
