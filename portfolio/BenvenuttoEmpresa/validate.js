$(document).ready(function() {
	$('#formulario-contacto').validate({
		rules: {
			nombre: {
				required: true,
				minlength: 3,
				maxlength: 30
			},
			email: {
				required: true,
				email: true
			},
			telefono: {
				required: true,
				number: true
			},
			mensaje: {
				required: true,
				minlength: 10,
				maxlength: 200
			}
		},
		messages: {
			nombre: {
				required: 'Por favor, ingrese su nombre.',
				minlength: 'Su nombre debe contener al menos 3 caracteres.',
				maxlength: 'Por favor, ingrese no más de 30 caracteres.'
			},
			email: {
				required: 'Por favor, ingrese su correo electrónico.',
				email: 'Por favor, ingrese una dirección de correo electrónico válida.'
			},
			telefono: {
				required: 'Por favor, ingrese su número de teléfono.',
				number: 'Solo se permite números.'
			},
			mensaje: {
				required: 'Por favor, ingrese su mensaje.',
				minlength: 'Por favor, ingrese al menos 10 caracteres.',
				maxlength: 'Por favor, ingrese no más de 200 caracteres.'
			}
		},
		submitHandler: function (form) {
			alert('El formulario se envió correctamente.');
			generarPDF(event);
		}
	});
});

