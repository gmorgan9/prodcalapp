<?php

$db_handle = pg_connect("host=10.25.90.110 port=5432 dbname=calapp user=gmor password=gmorpass");

if ($db_handle) {

echo 'Connection attempt succeeded.';

} else {

echo 'Connection attempt failed.';

}

pg_close($db_handle);

?>