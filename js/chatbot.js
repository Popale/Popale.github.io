document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");

    const API_KEY = "AIzaSyCd05QDrsj6ldopkKBTZ6SWvyR9hSSStj8";
    

    chatToggle.addEventListener("click", () => {
        chatContainer.classList.toggle("open");
    });

    closeChat.addEventListener("click", () => {
        chatContainer.classList.remove("open");
    });


    sendBtn.addEventListener("click", sendMessage);


    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });


    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        appendMessage("user", message);
        userInput.value = "";


        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing-indicator");
        typingIndicator.textContent = "Escribiendo...";
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;


        fetchResponseFromGemini(message, typingIndicator);
    }


    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; 
    }

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
            console.log("Respuesta de Gemini:", data); 


            if (data.error) {
                console.error("Error de la API:", data.error);
                typingIndicator.remove();
                appendMessage("bot", "⚠ Error con la API de Gemini. Revisa tu clave.");
                return;
            }


            let botReply = "No entendí la pregunta. 🤔";
            if (data && data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
                botReply = data.candidates[0].content.parts[0].text || botReply;
            }


            setTimeout(() => {
                typingIndicator.remove();
                appendMessage("bot", botReply);
            }, 1000);
        } catch (error) {
            console.error("Error con la API de Gemini:", error);
            typingIndicator.remove();
            appendMessage("bot", "⚠ Error de conexión con la IA.");
        }
    }
});
