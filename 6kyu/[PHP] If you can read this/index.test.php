<?php

class MyTestCases extends TestCase
{
    public function testHardCodedStrings() {
      $this->assertEquals(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
      $this->assertEquals(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
      $this->assertEquals(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");
    }
    public function testRandomStrings() {
      $this->randTests(25);
    }
    
    public function randTests($num){
      for($i=0;$i<$num;$i++){
        $strIn = array();
        $strOut = array();
        for($j=0;$j<rand(1,9);$j++){
          $arr = ["Alfa","November","Bravo","Oscar","Charlie","Papa","Delta","Quebec","Echo","Romeo",
          "Foxtrot","Sierra","Golf","Tango","Hotel","Uniform","India","Victor", "Juliet","Whiskey","Xray","Kilo",
          "Lima","Yankee","Mike","Zulu","?",".","!"];
          $rd = rand(0,count($arr)-1);
          $strIn[] = str_split($arr[$rd])[0];
          $strOut[] = $arr[$rd];
        }
        $this->assertEquals(to_nato(implode('',$strIn)), implode(' ',$strOut));
      }
    }
}