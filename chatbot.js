// Toggle chatbot visibility
let chatbotOpen = false;

function toggleChatbot() {
    const chatbox = document.querySelector(".chatbox");
    if (chatbotOpen) {
        chatbox.style.display = "none";
    } else {
        chatbox.style.display = "flex";
    }
    chatbotOpen = !chatbotOpen;
}

// Close chatbot
function closeChatbot() {
    const chatbox = document.querySelector(".chatbox");
    chatbox.style.display = "none";
    chatbotOpen = false;
}

// Function to send a message from user
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Display user's message
    displayMessage(userInput, "user");

    // Clear input field
    document.getElementById("user-input").value = "";

    // Simulate chatbot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot");
    }, 1000);
}

// Display message in chatbox
function displayMessage(message, sender) {
    const chatboxBody = document.getElementById("chatbox-body");

    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageElement.innerHTML = message;

    chatboxBody.appendChild(messageElement);

    // Scroll to the bottom
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

// Get chatbot response based on user input
function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // Predefined responses
    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (lowerCaseInput.includes("resources")) {
        return "We offer various educational resources for Class 1 to 5 students.";
    } else if (lowerCaseInput.includes("videos")) {
        return "You can access educational videos in the Videos section of the website.";
    } else if (lowerCaseInput.includes("quizzes")) {
        return "Test your knowledge with our fun quizzes in the Quizzes section!";
    } else if (lowerCaseInput.includes("about")) {
        return "We are a team dedicated to bringing quality education through modern and traditional learning methods.";
    } else {
        return "Sorry, I didn't understand that. Could you please rephrase?";
    }
}

// Handle Enter key press for sending message
function checkInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
