<?php

function invert(array $a): array {
  $result = [];
  foreach ($a as $number) {
    if ($number > 0) {
      $result[] = '-' . $number;
    } else if ($number < 0) {
      $result[] = substr($number, 1);
    } else {
      $result[] = $number;
    }
  }
  
  return $result;
}