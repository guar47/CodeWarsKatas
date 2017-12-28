<?php

function countPositivesSumNegatives($input) {
    if (empty($input)) {
      return [];
    }
    $sumOfPositive = 0;
    $sumOfNegative = 0;
    foreach ($input as $number) {
      if ($number > 0) {
        $sumOfPositive += 1;
      } else {
        $sumOfNegative += $number;
      }
    }
    return [$sumOfPositive, $sumOfNegative];
}