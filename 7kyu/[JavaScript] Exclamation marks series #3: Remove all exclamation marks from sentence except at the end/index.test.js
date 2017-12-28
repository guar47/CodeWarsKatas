function an(s) {
  return s.replace(/\!+$/, x => "?".repeat(x.length)).replace(/\!/g, "").replace(/\?/g, "!")
}
function rndc() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())];
}
function rndc1() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length * Math.random())];
}
function rndclo() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())];
}
function rndcn() {
  var allc = "1234567890"
  return allc[~~(allc.length * Math.random())];
}
function rndcl() {
  var allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())];
}
function rndcno() {
  var allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())];
}
function rndch() {
  var allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())];
}
function rnd9() {
  var allc = "123456789";
  return allc[~~(allc.length * Math.random())];
}
function rnd10() {
  var allc = "0123456789";
  return allc[~~(allc.length * Math.random())];
}
function rnds(n) {
  var len = n || rand(3, 7)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl();
  return rs.join("");
}
function rndss(n) {
  var len = n || rand(2, 5)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds();
  return rndch() + rs.join(" ")
}
function rndsss(n) {
  var len = n || rand(5, 15)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds();
  return rndch() + rs.join(" ")
}
function rndname() {
  return rndch() + rnds()
}
function shuff(arr) {
  for (var i = 0; i < 20; i++) {
    var idx1 = rand(0, arr.length - 1), idx2 = rand(0, arr.length - 1)
    var t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
function rnds2(n) {
  var len = n || ~~(15 * Math.random()) + 4;
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl();
  return rs.join("");
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndmark() {
  var len = rand(1, 6), r = []
  for (var i = 0; i < len; i++) r[i] = rnds() + (rand(0, 1000) % 2 == 0 ? "!".repeat(Math.max(0, rand(-2, 5))) : "")
  return r.join(" ") + "!".repeat(Math.max(0, rand(-2, 5)))
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    Test.assertSimilar(remove("Hi!"), "Hi!")
    Test.assertSimilar(remove("Hi!!!"), "Hi!!!")
    Test.assertSimilar(remove("!Hi"), "Hi")
    Test.assertSimilar(remove("!Hi!"), "Hi!")
    Test.assertSimilar(remove("Hi! Hi!"), "Hi Hi!")
    Test.assertSimilar(remove("Hi"), "Hi")
  })
})
describe("100 Random Tests", function () {
  it("It should works for random tests too", function () {
    for (var iii = 0; iii < 100; iii++) {
      var lll = rndmark(), ans = an(lll)
      console.log("<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>" +
        "s = \"" + lll + "\"</font>", "")
      var useran = remove(lll)
      Test.assertSimilar(useran, ans)
    }
  });
});

describe("Happy Coding ^_^", function () {
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>", "")
});