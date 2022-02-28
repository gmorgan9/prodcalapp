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
            <h3>
                Sunday
            </h3>
        </div>
        <div class="mon">
            <h3>
                Monday
            </h3>
        </div>
        <div class="tue">
            <h3>
                Tuesday
            </h3>
        </div>
        <div class="wed">
            <h3>
                Wednesday
            </h3>
        </div>
        <div class="thu">
            <h3>
                Thursday
            </h3>
        </div>
        <div class="fri">
            <h3>
                Friday
            </h3>
        </div>
        <div class="sat">
            <h3>
                Saturday
            </h3>
        </div>
    </div>
</div>
    
</body>
</html>