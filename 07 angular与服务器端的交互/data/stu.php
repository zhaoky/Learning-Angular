<?php
header("Content-type:text/json");
$stuList = array(
        array("code" => "10101", "name" => "zky","score" => "530"),
        array("code" => "10102", "name" => "tr","score" => "570"),
        array("code" => "10103", "name" => "qxq","score" => "0"),
        array("code" => "10104", "name" => "lr","score" => "340"),
        array("code" => "10105", "name" => "sx","score" => "5300")
    );
echo json_encode($stuList);
?>