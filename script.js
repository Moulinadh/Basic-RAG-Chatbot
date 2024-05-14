function uploadText() {
    var text = document.getElementById("text-input").value;
    fetch('/api/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => {
        if (response.ok) {
            alert('Text uploaded successfully.');
        } else {
            alert('Error uploading text.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: userInput })
    })
    .then(response => response.text())
    .then(data => {
        displayMessage(userInput, 'user');
        displayMessage(data, 'bot');
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById("user-input").value = "";
}

function displayMessage(message, sender) {
    var chatDisplay = document.getElementById("chat-display");
    var messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.innerHTML = message;
    chatDisplay.appendChild(messageElement);
}
