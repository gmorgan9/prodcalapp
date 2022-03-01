<?php 
  echo "My first PHP script!";

  pg_connect("host=10.25.90.110/24 dbname=calapp user=gmor password=gmorpass");
  
  pg_query("create table testing(id integer)");
  
  echo " script! Executed";