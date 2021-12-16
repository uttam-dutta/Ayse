var n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("touchstart", function() {
    var c = this.innerText;
    switch (c) {
      case "A":
        var a1 = new Audio('1.mp3');
        a1.play();
        break;
      case "Y":
        var a2 = new Audio('2.mp3');
        a2.play();
        break;
      case "S":
        var a3 = new Audio('3.mp3');
        a3.play();
        break;
      case "E":
        var a4 = new Audio('4.mp3');
        a4.play();
        break;
      default: console.log(c);

    }
  });
}
