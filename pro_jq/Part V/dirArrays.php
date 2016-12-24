


<?php
//echo getcwd();

$myRoot = getcwd();
$localSrvrRoot = "http://localhost:8888/pro-jquery/Part V/";
echo "<br><br>";
echo $myRoot;
echo "<br><br>";
$array = scandir($myRoot); 
//print_r($array);
echo count($array);
echo " records in this Root Directory";
?> 


