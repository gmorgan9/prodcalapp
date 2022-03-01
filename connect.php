<?php

$db_handle = pg_connect("host=localhost dbname=postgres user=postgres password=admin350PASS!");

if ($db_handle) {

echo 'Connection attempt succeeded.';

} else {

echo 'Connection attempt failed.';

}

pg_close($db_handle);

?>