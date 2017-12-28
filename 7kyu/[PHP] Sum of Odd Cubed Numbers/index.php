<?php

function cube_odd($a) {
$result = null;
  foreach ($a as $element) {
    if (!is_integer($element)) {
      
      return null;
    }
    
    $cubeElement = $element * $element * $element;
    
    if ($cubeElement % 2 !== 0) {
      $result += $cubeElement;
    }
  }
  
  return $result;
}