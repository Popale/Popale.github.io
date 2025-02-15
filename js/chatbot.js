document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");

    const API_KEY = "AIzaSyChGBqyojWq_Gm7lvNuJqAIVD0rELCQ96I"; 

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

        // Llamada a Gemini API
        fetchResponseFromGemini(message);
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

    // Función para obtener respuesta de Gemini AI
    async function fetchResponseFromGemini(userMessage) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] })
            });

            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No entendí la pregunta. 😕";

            // Reemplaza el mensaje "Escribiendo..."
            setTimeout(() => {
                chatMessages.lastChild.textContent = botReply;
            }, 1200);

        } catch (error) {
            console.error("Error con Gemini AI:", error);
            chatMessages.lastChild.textContent = "Error al obtener respuesta de la IA. 😢";
        }
    }
});
