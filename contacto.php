<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y limpiar los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validar que los campos no estén vacíos
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Configura el destinatario y el asunto del correo
        $to = "alexisayalaespinoza159@gmail.com"; // **Cambia esto por tu dirección de correo electrónico**
        $subject = "Nuevo mensaje de contacto desde el sitio web";

        // Crear el cuerpo del mensaje
        $email_body = "Nombre: $name\n";
        $email_body .= "Correo Electrónico: $email\n";
        $email_body .= "Mensaje:\n$message\n";

        // Encabezados del correo
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Enviar el correo
        if (mail($to, $subject, $email_body, $headers)) {
            echo "<h1>Gracias por tu mensaje!</h1>";
            echo "<p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>";
        } else {
            echo "<h1>Error!</h1>";
            echo "<p>Lo sentimos, hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.</p>";
        }
    } else {
        echo "<h1>Error!</h1>";
        echo "<p>Por favor, completa todos los campos.</p>";
    }
}
?>

