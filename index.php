<?php
include("path.php");
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Custom Styling -->
    <link rel="stylesheet" href="../../assets/css/style.css?v=<?php echo time(); ?>">
    
    <title>Document</title>
</head>
<body>

<?php 

$month = date('F');

echo $month;
if($month == 12){
   echo "<br />December is the month :)";
} else {
   echo "<br /> The month is probably not December";
}
?>

<?php include(ROOT_PATH . "/app/includes/header.php"); ?>
<hr>
<?php include(ROOT_PATH . "/app/includes/week_days.php"); ?>
<?php include(ROOT_PATH . "/app/includes/cal_days.php"); ?>

    
</body>
</html>