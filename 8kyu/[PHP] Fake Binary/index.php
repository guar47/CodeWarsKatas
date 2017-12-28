<?php

function fake_bin(string $s): string {
  // Write your code here
  $newString = '';
  for ($i = 0; $i < strlen($s); $i++) {
    if ($s[$i] >= 5) {
      $newString.= '1';
    } else {
      $newString.= '0';
    }
  }
  return $newString;
}