function generateSecurePassword(length = 16) {
    let pwd = document.getElementById("securePwd");
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    // Combine all character sets into one string
    const allCharacters = upperCaseLetters + lowerCaseLetters + digits + specialCharacters;

    let password = '';
    
    // Randomly pick characters from the combined string to form a password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    pwd.textContent = password;
}