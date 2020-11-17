function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    let mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (let i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('.envioDeFormulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '582812783609';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
      //  let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#email').value
        let cuerpoDelMensaje = document.querySelector('#cuerpoDelMensaje').value

        let mensaje = `send?phone=${telefono}&text=*Formulario enviado desde Hobby Layer*%0A*¿Cual es tu nombre?*%0A${nombre}%0A*Tu correo electrónico?*%0A${email}%0A*Tu Mensaje*%0A${cuerpoDelMensaje}`
        if(isMobile()) {
            window.open(`${urlMobile}${mensaje}`,'_blank')
        }else{
             window.open(urlDesktop + mensaje,'_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviado'
        buttonSubmit.disabled = false
    }, 3000);
});