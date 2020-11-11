function Enviar(){

	var nom=document.getElementById('nombre').value;
	var correo=document.getElementById('correo').value;
	
	var tel=document.getElementById('Teléfono').value;
	var mens=document.getElementById('mensaje').value;
	
	if(nom==""||correo==""||tel==""||mens==""){
		alert('Debe completar todos los campos');
	}
		else {alert('Muchas gracias  por escribirnos,en breves momentos te responderemos...!');


		location.href ="contacto.html"};

}