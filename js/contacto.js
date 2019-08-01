/******************************************************************************************************************/
/** ENVIO DE CORREO                                                                                              */
/******************************************************************************************************************/

function validateContact() {
    var errors = "";

    var contact_name = document.getElementById("contact_name");
    var contact_email_address = document.getElementById("contact_email");
    var contact_phone = document.getElementById("contact_phone");
    var contact_mensaje = document.getElementById("message");

    var contenido_email = '<p>Cliente: ' + contact_name.value + '</p>' +
        '<p>Email: ' + contact_email.value + '</p>' +
        '<p>Teléfono: ' + contact_phone.value + '</p>' +
        '<p>Mensaje: ' + contact_mensaje.value + '</p>';

    if (contact_name.value == "") {
        errors += 'El campo nombre es necesario.';
    } else if (contact_email_address.value == "") {
        errors += 'El campo email es necesario.';
    } else if (checkcontact(contact_email_address.value) == false) {
        errors += 'El correo electrónico no es valido.';
    } else if (contact_phone.value == "") {
        errors += 'El campo teléfono es necesario.';
    }


    if (errors) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = errors;
        return false;
    } else {

        $.ajax({
            type: "POST",
            url: 'process.php',
            data: $("#contact_form").serialize(),
            success: function(msg) {
                if (msg == 'success') {
                    document.getElementById("error").style.display = "none";
                    document.getElementById("contact_name").value = "";
                    document.getElementById("contact_email").value = "";
                    document.getElementById("contact_phone").value = "";
                    document.getElementById("message").value = "";
                    $("#contact_form").hide();
                    document.getElementById("success").style.display = "block";
                    document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
                } else {
                    document.getElementById("error").style.display = "block";
                    document.getElementById("error").innerHTML = "Oops! Something went wrong while proceeding.";
                }
            }

        });

    }

    Email.send({

        SecureToken: "0fc37eca-e045-4dca-b172-2a753b3288d8",
        To: 'hector.pichardo@ideasg.com',
        From: contact_email_address.value,
        Subject: contact_name.value,
        Body: contenido_email,
        // Body: contact_phone.value.concat(' ,', contact_name.value, ' ,', contact_mensaje.value),

    }).then(
        // message => alert(message)
    );

    contact_name.value = "";
    contact_email_address.value = "";
    contact_phone.value = "";
    contact_mensaje.value = "";
    document.getElementById("error").style.display = "none";
    alert("Lo contactaremos en breve.");

}