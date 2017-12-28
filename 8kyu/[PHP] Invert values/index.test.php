<?php

class InvertTest extends TestCase {
  public function testFixed() {
    $this->assertEquals([-1, -2, -3, -4, -5], invert([1, 2, 3, 4, 5]));
    $this->assertEquals([-1, 2, -3, 4, -5], invert([1, -2, 3, -4, 5]));
    $this->assertEquals([], invert([]));
    $this->assertEquals([0], invert([0]));
  }
  protected function solution(array $a): array {
    return array_map(function ($n) {return -$n;}, $a);
  }
  protected function randomArray(): array {
    return array_map(function () {return rand(-100, 100);}, range(1, rand(1, 100)));
  }
  public function testRandom() {
    for ($i = 0; $i < 1e3; $i++) $this->assertEquals($this->solution($a = $this->randomArray()), invert($a));
  }
}