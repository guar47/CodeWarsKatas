<?php

function to_nato($words){
  $splittedLetters = str_split($words);
  $result = [];
  
  foreach ($splittedLetters as $letter) {
    if (!($letter == ' ')) {
      $result[] = phonetic($letter);
    }
  }

  return implode(' ', $result);
}

function phonetic($char)
{
    $nato = [
        "a" => "Alfa", 
        "b" => "Bravo", 
        "c" => "Charlie", 
        "d" => "Delta", 
        "e" => "Echo", 
        "f" => "Foxtrot", 
        "g" => "Golf", 
        "h" => "Hotel", 
        "i" => "India", 
        "j" => "Juliet", 
        "k" => "Kilo", 
        "l" => "Lima", 
        "m" => "Mike", 
        "n" => "November", 
        "o" => "Oscar", 
        "p" => "Papa", 
        "q" => "Quebec", 
        "r" => "Romeo", 
        "s" => "Sierra", 
        "t" => "Tango", 
        "u" => "Uniform", 
        "v" => "Victor", 
        "w" => "Whiskey", 
        "x" => "Xray", 
        "y" => "Yankee", 
        "z" => "Zulu", 
        "0" => "Zero", 
        "1" => "One", 
        "2" => "Two", 
        "3" => "Three", 
        "4" => "Four", 
        "5" => "Five", 
        "6" => "Six", 
        "7" => "Seven", 
        "8" => "Eight", 
        "9" => "Niner",
        '!' => '!',
        '.' => '.',
        '?' => '?',
        ];
        
    return $nato[strtolower($char)];
}