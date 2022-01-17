<?php
header("Content-type:application/json");
$json=$_GET['x'];
$data=json_decode($json);
$suma =$data->vv1+$data->vv2;
echo '{"suma":"'.$suma.'"}';
?>
