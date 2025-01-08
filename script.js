// Caesar Cipher Logic
function caesarCipher(text, shift, mode) {
    if (!text) return ""; // Handle empty input
    const shiftValue = mode === "decrypt" ? -shift : shift;

    return text.split("").map((char) => {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            const baseCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // Upper or Lowercase
            return String.fromCharCode(((charCode - baseCode + shiftValue + 26) % 26) + baseCode);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join("");
}

// DOM Manipulation
document.getElementById("encryptBtn").addEventListener("click", () => processText("encrypt"));
document.getElementById("decryptBtn").addEventListener("click", () => processText("decrypt"));

function processText(mode) {
    const text = document.getElementById("textInput").value;
    const key = parseInt(document.getElementById("cipherKey").value, 10);

    if (isNaN(key)) {
        alert("Please enter a valid key!");
        return;
    }

    const result = caesarCipher(text, key, mode);
    document.getElementById("result").innerText = result || "No output. Please check your inputs!";
}
