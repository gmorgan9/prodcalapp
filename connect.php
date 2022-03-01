<?php 
$hostname = "localhost";
$dbname = "CalendarApp";
$username = "postgres";
$pass = "admin350PASS!";

// Create connection
$db_conn = pg_connect("host = $hostname dbname = $dbname user = $username password = $pass");

if(!$db_conn) {
    echo "no";
} else {
    echo "yes";
}

  ?>