<?php


include "shuju.php";

if(isset($_GET['wzpic'])){
    $sid=$_GET['wzpic'];
    $result=$conn->query("select * from wangyishuju where sid='$sid'  ");
    echo json_encode($result->fetch_assoc());

    
}