<?php 
try {
	$dsn = "pgsql:host=localhost;port=5432;dbname=postgres;";
	// make a database connection
	$pdo = new PDO($dsn, postgres, admin350PASS!, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

	if ($pdo) {
		echo "Connected to the $db database successfully!";
	}
} catch (PDOException $e) {
	die($e->getMessage());
} finally {
	if ($pdo) {
		$pdo = null;
	}
}
  ?>