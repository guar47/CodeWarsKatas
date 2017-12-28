<?php

class CubeOddTest extends TestCase {
  public function testExamples() {
    $this->assertEquals(28, cube_odd([1, 2, 3, 4]));
    $this->assertEquals(0, cube_odd([-3, -2, 2, 3]));
    $this->assertEquals(NULL, cube_odd(["a", 12, 9, "z", 42]));
  }
  public function testFixed() {
    $this->assertEquals(7230, cube_odd([1, 3, 4, 7, 10, 12, 14, 19, 20]));
    $this->assertEquals(NULL, cube_odd([1, 3, 4, 7, 10, true, 14, 19, 20]));
    $this->assertEquals(1980, cube_odd([9, 9, 3, 3, 4, 5, 7]));
    $this->assertEquals(NULL, cube_odd([9, 9, false, 3, 4, 5, 7]));
    $this->assertEquals(1043761348, cube_odd([997, 1024, 375, 2468]));
    $this->assertEquals(NULL, cube_odd([997, "hello world", 375, "goodbye world"]));
    $this->assertEquals(76636, cube_odd(range(1, 27)));
    $this->assertEquals(NULL, cube_odd([NULL, true, "alfalfa", "bear", false, "three", false]));
    $this->assertEquals(882956, cube_odd([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]));
    $this->assertEquals(NULL, cube_odd([1, 1, 2, 3, 5, "Codewars", 13, 21, false, true, 89]));
  }
  protected function solution($a) {
    if (!count(array_filter($a, function ($e) {return !is_float($e) && !is_integer($e);}))) return array_reduce(array_filter($a, function ($e) {return $e % 2;}), function ($s, $e) {return $s + $e ** 3;}, 0);
  }
  protected function randomArray(): array {
    return array_map(function () {return lcg_value() < 0.95 ? rand(0, 10) : "abcdefghijklmnopqrstuvwxyz"[rand(0, 25)];}, range(1, rand(1, 25)));
  }
  public function testRandom() {
    for ($i = 0; $i < 1e3; $i++) $this->assertEquals($this->solution($a = $this->randomArray()), cube_odd($a));
  }
}