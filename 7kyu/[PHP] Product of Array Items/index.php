<?php

function product($a) {
  return empty($a) ? null : array_reduce($a, function($result, $elem) {return $result * $elem;}, 1);
}