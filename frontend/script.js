// Function runs when button is clicked
function startListening() {

    // Gets paragraph element with id="output"
    const output =
        document.getElementById("output");

    // Creates speech recognition object
    const recognition =
        new webkitSpeechRecognition();

    // Sets language to English
    recognition.lang = "en-US";

    // Runs when microphone starts listening
    recognition.onstart = function () {

        // Changes output text
        output.innerText = "🎙️ Listening...";
    };
// Function to download speech as TXT file
function downloadTXT() {

    // Gets output text
    const text =
        document.getElementById("output").innerText;

    // Creates text blob
    const blob =
        new Blob([text], { type: "text/plain" });

    // Creates temporary download link
    const link =
        document.createElement("a");

    // File URL
    link.href =
        URL.createObjectURL(blob);

    // File name
    link.download = "speech.txt";

    // Automatically clicks link
    link.click();
}
    // Runs when speech is recognized
    recognition.onresult = function (event) {

        // Stores spoken text in variable
        let transcript =
            event.results[0][0].transcript;

        // Converts first letter to uppercase
        transcript =
            transcript.charAt(0).toUpperCase() +
            transcript.slice(1);

        // Displays final speech text
        output.innerText =
            "✅ You said: " + transcript;
    };

    // Runs if error occurs
    recognition.onerror = function () {

        // Shows error message
        output.innerText =
            "❌ Error occurred while listening.";
    };

    // Starts speech recognition
    recognition.start();
}