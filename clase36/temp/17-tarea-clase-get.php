<?php

	$v1=$_GET["nombre"];
	$v2=$_GET["correo"];
	$v3=$_GET["ciudad"];
	$v4=$_GET["intereses"];
	$res=($v1." - ".$v2." - ".$v3." - ".$v4);
	echo $res;

?>