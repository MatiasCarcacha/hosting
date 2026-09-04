function generarPDF(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

        // Crear el documento PDF
        var doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("Datos del contacto", 10, 10);

        doc.setFontSize(16);
        doc.text("Nombre: " + nombre, 10, 30);
        doc.text("Email: " + email, 10, 40);
        doc.text("Teléfono: " + telefono, 10, 50);

        doc.setFontSize(12);
        doc.text("Mensaje: " + mensaje, 10, 60);

        // Descargar el PDF con el nombre "contacto.pdf"
        doc.save(nombre + ".pdf");
}