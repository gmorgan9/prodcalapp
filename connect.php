<?php 
  $host        = "host = 10.25.90.110/24";
  $port        = "port = 5432";
  $dbname      = "dbname = calapp";
  $credentials = "user = gmor password = gmorpass";

  $db = pg_connect( "$host $port $dbname $credentials"  );
  if(!$db) {
     echo "Error : Unable to open database\n";
  } else {
     echo "Opened database successfully\n";
  }
  
  ?>