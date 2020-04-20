<?php

$query_string = $_SERVER["QUERY_STRING"];
parse_str($query_string,$query);
$barcode_value = $query["barcode"];

// Create a PHP object
$productObj = new stdClass();
$productObj->productList = array();

// connect to database
$db_connection = new mysqli(
    "lab-web-app_db_1",
    "user",
    "password",
    "db");

if ($db_connection->connect_error) {
    die("connection failed: " . $db_connection->connect_error);
}

$results = $db_connection->query("SELECT * FROM `item` WHERE `barcode` = '".$barcode_value."'");
if ($results) {
    foreach($results as $row) {
        $item = new stdClass();
        $item->name = $row["name"];
        $item->barcode = $row["barcode"];
        $item->img_url = $row["img_url"];
        $productObj->productList[] = $item;
    }
}
// convert object to JSON string
$productJson = json_encode($productObj);

// return the string to the client
header('Content-Type: application/json');
echo $productJson;

?>