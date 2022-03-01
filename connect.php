<?php
$cn = pg_connect("host=10.25.90.110 port=5432 dbname=calapp user=gmor password=gmorpass");
if($cn) {
    echo "connected";
} else {
    echo "not";
}

?>