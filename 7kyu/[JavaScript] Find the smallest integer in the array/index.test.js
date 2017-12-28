//######Security Tests######
if (Math.random == undefined)
  Test.assertEquals(false, true, 'Math Object must contain random Method!')
if (Math.floor == undefined)
  Test.assertEquals(false, true, 'Math Object must contain floor Method!')
if (Math.random.toString().indexOf('[native code]') == -1 || Math.random.toString().length != 35)
  Test.assertEquals(false, true, 'Math.random method must be Native!')
if (Math.floor.toString().indexOf('[native code]') == -1 || Math.floor.toString().length != 34)
  Test.assertEquals(false, true, 'Math.floor method must be Native!')
//######Security Tests######

Test.describe("Smallest Integer Tests", _ => {
  var sif = new SmallestIntegerFinder();
  Test.it("Fixed Tests", __ => {
    Test.assertEquals(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
    Test.assertEquals(sif.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
    Test.assertEquals(sif.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
    Test.assertEquals(sif.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
    Test.assertEquals(sif.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
  });

  Test.it("Random Tests", __ => {
    for (var i = 0; i < 100; i++) {
      var count = Math.floor(Math.random() * 100) + 100;
      var test = [];
      for (var x = 0; x < count; x++) {
        test.push(Math.floor(Math.random() * 100000000));
      }
      var ans = solv(test.slice());
      Test.assertEquals(sif.findSmallestInt(test), ans.ans, ans.desc)
    }
  });
});

function solv(_) {
  var n = _.sort((a, b) => a - b)[0]
  return { ans: n, desc: `Should return the smallest int ${n}` };
}