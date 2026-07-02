function startListening() {

    const output = document.getElementById("output");

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.onstart = function () {
        output.innerText = "🎙️ Listening...";
    };

    recognition.onresult = function (event) {

        let transcript =
    event.results[0][0].transcript;

transcript =
    transcript.charAt(0).toUpperCase() +
    transcript.slice(1);
        output.innerText =
            "✅ You said: " + transcript;
    };

    recognition.onerror = function () {
        output.innerText =
            "❌ Error occurred while listening.";
    };

    recognition.start();
}