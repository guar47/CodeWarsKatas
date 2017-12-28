<?php

function cat_mouse(string $s): string {
  $splittedSymbols = str_split($s);
  $dots = [];
  foreach ($splittedSymbols as $symbol) {
    if ($symbol === '.') {
      $dots[] = $symbol;
    }
  }
  if (count($dots) <= 3) {
    return 'Caught!';
  }
  return 'Escaped!';
}