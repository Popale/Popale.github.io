document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");

    const API_KEY = "AIzaSyChGBqyojWq_Gm7lvNuJqAIVD0rELCQ96I"; //

    // Abrir/Cerrar el chatbot
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

        // Agregar "Escribiendo..." en la parte inferior
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing-indicator");
        typingIndicator.textContent = "Escribiendo...";
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Llamar a la API de Gemini AI
        fetchResponseFromGemini(message, typingIndicator);
    }

    // Función para agregar mensajes al chat
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll al último mensaje
    }

    // ✅ Función para obtener respuesta de Gemini AI correctamente
    async function fetchResponseFromGemini(userMessage, typingIndicator) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userMessage }] }]
                })
            });

            const data = await response.json();

            // ✅ Verificamos si hay respuesta y extraemos el texto correctamente
            let botReply = "No entendí la pregunta. 🤔";
            if (data && data.candidates && data.candidates.length > 0) {
                botReply = data.candidates[0].content.parts[0].text || botReply;
            }

            // Eliminar "Escribiendo..." y agregar la respuesta
            setTimeout(() => {
                typingIndicator.remove();
                appendMessage("bot", botReply);
            }, 1000);
        } catch (error) {
            console.error("Error con Gemini AI:", error);
            typingIndicator.remove();
            appendMessage("bot", "Error al obtener respuesta de la IA. 😢");
        }
    }
});
