document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = 'Informations envoyées avec succès !';
        document.getElementById('infoForm').reset();
    })
    .catch((error) => {
        console.error('Erreur:', error);
        document.getElementById('message').innerText = 'Une erreur s\'est produite.';
    });
});
