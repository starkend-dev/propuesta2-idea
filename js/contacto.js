/******************************************************************************************************************/
/** ENVIO DE CORREO                                                                                              */
/******************************************************************************************************************/

function envioCorreo() {
    var errors = "";

    var contact_name = document.getElementById("contact_name");
    var contact_email_address = document.getElementById("contact_email");
    var contact_phone = document.getElementById("contact_phone");
    var contact_mensaje = document.getElementById("message");

    var contenido_email = '<p>Cliente: ' + contact_name.value + '</p>' +
        '<p>Email: ' + contact_email.value + '</p>' +
        '<p>Teléfono: ' + contact_phone.value + '</p>' +
        '<p>Mensaje: ' + contact_mensaje.value + '</p>';


    Email.send({

        SecureToken: "0fc37eca-e045-4dca-b172-2a753b3288d8",
        To: 'hector.pichardo@ideasg.com',
        From: contact_email_address.value,
        Subject: contact_name.value,
        Body: contenido_email,
        // Body: contact_phone.value.concat(' ,', contact_name.value, ' ,', contact_mensaje.value),

    }).then(
        message => alert(message)
    );

    // contact_name.value = "";
    // contact_email_address.value = "";
    // contact_phone.value = "";
    // contact_mensaje.value = "";
    document.getElementById("error").style.display = "none";
    alert("Lo contactaremos en breve.");

}