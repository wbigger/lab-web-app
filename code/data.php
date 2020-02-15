<?php

// Create a PHP object
$productObj = new stdClass();
$productObj->productList = array(new stdClass(),new stdClass());
$productObj->productList[0]->product = "Arduino";
$productObj->productList[0]->price = 7;
$productObj->productList[1]->product = "Raspberry";
$productObj->productList[1]->price = 15;

// convert object to JSON string
$productJson = json_encode($productObj);

// return the string to the client
echo $productJson;

?>