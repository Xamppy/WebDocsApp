const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// URL de descarga de la aplicación
var downloadUrl = 'https://drive.google.com/file/d/1BSHOQyVLhb6WAHZlKOd9GV2mty4v6Yyl/view?usp=sharing'; // Reemplaza con el enlace de tu aplicación

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

window.onload = function() {
    var contentDiv = document.getElementById('contenidoqr');

    if (isMobileDevice()) {
        // Mostrar enlace de descarga directo
        var downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.innerText = 'Haz clic aquí para descargar la aplicación';
        downloadLink.style.fontSize = '15px';
        downloadLink.style.textDecoration = 'none';
        downloadLink.style.color = '#BDBDBD';

        contentDiv.appendChild(downloadLink);
    } else {
        // Generar y mostrar código QR
        var qrCode = new QRCode(contentDiv, {
            text: downloadUrl,
            width: 200,
            height: 200,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H
        });

        var instruction = document.createElement('p');
        instruction.innerText = 'Escanea este código QR con tu dispositivo móvil para descargar la aplicación';
        instruction.style.fontSize = '18px';
        instruction.style.marginTop = '20px';

        contentDiv.appendChild(instruction);
    }
};