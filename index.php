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

<?php include(ROOT_PATH . "/app/includes/header.php"); ?>
<hr>

<div class="cal">
    <div class="week_day">
        <div class="sun">
            <p>
                Sunday
            </p>
        </div>
        <div class="mon">
            <p>
                Monday
            </p>
        </div>
        <div class="tue">
            <p>
                Tuesday
            </p>
        </div>
        <div class="wed">
            <p>
                Wednesday
            </p>
        </div>
        <div class="thu">
            <p>
                Thursday
            </p>
        </div>
        <div class="fri">
            <p>
                Friday
            </p>
        </div>
        <div class="sat">
            <p>
                Saturday
            </p>
        </div>
    </div>
</div>
    
</body>
</html>