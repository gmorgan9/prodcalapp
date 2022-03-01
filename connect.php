<?php 
try {
	$dsn = "pgsql:host=localhost;port=5432;dbname=postgres;user=postgres;pass=admin350PASS!";
	// make a database connection
	$pdo = new PDO("pgsql:host=localhost;port=5432;dbname=postgres;user=postgres;pass=admin350PASS!", [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

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