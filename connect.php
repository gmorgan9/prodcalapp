<?php 
  $host        = "host = locahost";
  $port        = "port = 5432";
  $dbname      = "dbname = CalendarApp";
  $credentials = "user = postgres password = admin350PASS!";

  $db = pg_connect( "$host $port $dbname $credentials"  );
  if(!$db) {
     echo "Error : Unable to open database\n";
  } else {
     echo "Opened database successfully\n";
  }
  
  ?>