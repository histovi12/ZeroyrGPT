async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return; // Agar user kuch nahi likhta to return

    // User ka message chat box me dikhana
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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 ",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // Ya "gpt-4" agar latest chahiye
            messages: [{ role: "user", content: userInput }]
        })
    });

    let data = await response.json();
    let aiResponse = data.choices[0].message.content || "Sorry, mujhe samajh nahi aaya.";

    // AI ka response chat box me dikhana
    chatBox.innerHTML += `<p><strong>ZeroGPT:</strong> ${aiResponse}</p>`;
}