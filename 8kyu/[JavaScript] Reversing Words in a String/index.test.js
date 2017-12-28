Test.describe('Basic Examples', _ => {
  Test.assertEquals(reverse('I am an expert at this'), 'this at expert an am I');
  Test.assertEquals(reverse('This is so easy'), 'easy so is This');
  Test.assertEquals(reverse('no one cares'), 'cares one no');
  Test.assertEquals(reverse(''), '');
  Test.assertEquals(reverse('CodeWars'), 'CodeWars');
})

Test.describe('Random Tests', _ => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a);
  const sol = s => s.split(" ").reverse().join(" ");
  var base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 40; i++) {
    var s = Array.from({ length: randint(1, 12) }, a => Array.from({ length: randint(5, 20) }, b => base[randint(0, base.length - 1)]).join("")).join(" ")
    Test.it(`Testing for ${s.inspect}`, _ => {
      Test.assertEquals(reverse(s), sol(s), "It should work for random inputs too");
    })
  }
})