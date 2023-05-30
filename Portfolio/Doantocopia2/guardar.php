<?php

	$usuario = "root";
	$password ="";
	$servidor ="localhost";
	$basededatos = "doantosrl";

$conexion = mysqli_connect($servidor,$usuario,"") or die ("Error con el servidor de la base de datos");

$bd = mysqli_select_db($conexion, $basededatos) or die ("Error de conexión al conectarse a la base de datos");

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$correo=$_POST['correo'];
$ciudad=$_POST['ciudad'];
$provincia=$_POST['provincia'];
$mensaje=$_POST['mensaje'];

$ejecutar=mysql_query($conexion, $sql);

if(!$ejecutar){

    echo"Hubo un error";

}else{

    echo"Mensaje enviado correctamente.";
}

?>