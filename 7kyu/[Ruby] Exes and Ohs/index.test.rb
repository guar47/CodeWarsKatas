Test.describe('Basic tests') do
  Test.assert_equals(XO('xo'), true)
Test.assert_equals(XO('XO'), true)
Test.assert_equals(XO('xo0'), true)
Test.assert_equals(XO('xxxoo'), false)
Test.assert_equals(XO("xxOo"), true)
Test.assert_equals(XO(''), true, 'Empty string contains equal amount of x and o')
Test.assert_equals(XO('xxxxxoooxooo'), true)
Test.assert_equals(XO("xxxm"), false)
Test.assert_equals(XO("ooom"), false)
Test.assert_equals(XO("Oo"), false)
Test.assert_equals(XO('abcdefghijklmnopqrstuvwxyz'), true, 'Alphabet contains equal amount of x and o')
end

Test.describe('Random tests') do
  def randint(a, b) rand(b - a + 1) + a end
def XOsol(str) lambda{| s | s.count('o') == s.count('x') }.(str.downcase) end

40.times do
  len = randint(0, 10)
  str = (randint(0, 1) == 0 ? ['X'] : ['x']) * len + (randint(0, 1) == 0 ? ['O'] : ['o']) * len
  str += ['xoXO a=!'[randint(0, 7)]]
str = str.shuffle.join
Test.it("Testing for #{str}") do
  Test.assert_equals(XO(str), XOsol(str), "It should work for random inputs too")
  end
end
end