<html>
 <head>
  <title>Prueba de PHP</title>
 </head>
 <body>
 
<?php
print "<pre>"; print_r($_REQUEST); print "</pre>\n";

print "<p>Su nombre es $_REQUEST[nombre]</p>\n";
print "<p>Sus apellidos es $_REQUEST[apellido]</p>\n";
print "<p>Su fecha de nacimiento es $_REQUEST[cumple]</p>\n";
print "<p>sexo $_REQUEST[sexo]</p>\n";
print "<p>NIA $_REQUEST[nia]</p>\n";
print "<p>DNI $_REQUEST[dni]</p>\n";
print "<p>Centro Anterior: $_REQUEST[centroorigen]</p>\n";
print "<p>Población de residencia $_REQUEST[vivienda]</p>\n";
print "<p>Módulos matriculados $_REQUEST[matriculado]</p>\n";
print "<p>Valoración personal $_REQUEST[personal]</p>\n";
print "<p>Grado de Satisfacción $_REQUEST[satisfecho]</p>\n";
print "<p>Módulos que gustan $_REQUEST[gustan]</p>\n";
print "<p>Módulos que no te  gustan $_REQUEST[nogustan]</p>\n";
print "<p>Razonamiento personal $_REQUEST[razona]</p>\n";
print "<p>Curriculum $_REQUEST[fichero]</p>\n";
print "<p>Foto $_REQUEST[foto]</p>\n";
?>
 <p>Comprueba tus datos antes de enviarlos, si no están bien vuelve a escribirlos.</p>
 </body>
</html>

