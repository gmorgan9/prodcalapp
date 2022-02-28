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
<?php include(ROOT_PATH . "/app/includes/week_days.php"); ?>

<div class="cal_day">
    <div class="row_1">
        <div class="box_1">
            1
        </div>
        <div class="box_2">
            2
        </div>
        <div class="box_3">
            3
        </div>
        <div class="box_4">
            4
        </div>
        <div class="box_5">
            5
        </div>
        <div class="box_6">
            6
        </div>
        <div class="box_7">
            7
        </div>
    </div>
    <div class="row_2">
        <div class="box_1">
            8
        </div>
        <div class="box_2">
            9
        </div>
        <div class="box_3">
            10
        </div>
        <div class="box_4">
            11
        </div>
        <div class="box_5">
            12
        </div>
        <div class="box_6">
            13
        </div>
        <div class="box_7">
            14
        </div>
    </div>
    <div class="row_3">
        <div class="box_1">
            15
        </div>
        <div class="box_2">
            16
        </div>
        <div class="box_3">
            17
        </div>
        <div class="box_4">
            18
        </div>
        <div class="box_5">
            19
        </div>
        <div class="box_6">
            20
        </div>
        <div class="box_7">
            21
        </div>
    </div>
</div>
    
</body>
</html>