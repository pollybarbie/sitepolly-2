document.getElementById('generateBtn').addEventListener('click', function() {
    const input = document.getElementById('mathInput').value;
    const password = generateSecurePassword(input);
    document.getElementById('password').textContent = password;
});

function generateSecurePassword(input) {
    if (input === "") {
        return "Por favor, insira um número!";
    }

    // Algoritmo simples para gerar uma senha segura
    let password = "";
    for (let i = 0; i < input.length; i++) {
        password += String.fromCharCode(input.charCodeAt(i) + 5); // Deslocamento dos caracteres
    }

    // Adicionando um pouco mais de aleatoriedade
    password += Math.random().toString(36).substr(2, 5); // Sufixo aleatório
    return password;
}
