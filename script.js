// Cole aqui suas configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA13NlT7itTrsrnreYbBpRaLEX6ljkqIEI",
    authDomain: "majunitygo.firebaseapp.com",
    databaseURL: "https://majunitygo-default-rtdb.firebaseio.com",
    projectId: "majunitygo",
    storageBucket: "majunitygo.firebasestorage.app",
    messagingSenderId: "686804002633",
    appId: "1:686804002633:web:1ca7c56b967078d8e1dc98"
};
firebase.initializeApp(firebaseConfig);

document.querySelector('.formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.querySelector('input[placeholder="Digite seu nome completo"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const whatsapp = document.querySelector('.whatsapp-group input[type="tel"]').value;
    const nascimento = document.querySelector('input[type="date"]').value;
    const genero = document.querySelector('select').value;

    // Salva no Firebase
    firebase.database().ref('cadastros').push({
        nome,
        email,
        whatsapp,
        nascimento,
        genero,
        data_envio: new Date().toISOString()
    });

    alert('Cadastro enviado com sucesso!');
    document.querySelector('.formulario').reset();
});
