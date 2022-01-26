<?php
	$v1=$_POST["nombre"];
	$v2=$_POST["correo"];
	$v3=$_POST["ciudad"];
	$v4=$_POST["intereses"];
	$res=($v1." - ".$v2." - ".$v3." - ".$v4);
	echo $res;
?>