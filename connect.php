<?php 
  echo "My first PHP script!";

  $db = pg_connect("host=10.25.90.110/24 dbname=calapp user=gmor password=gmorpass");

  if ($db) {
      echo "success";
  } else {
      echo "nope";
  }
  
  pg_query("create table testing(id integer)");
  
  echo " script! Executed";