var inputText = document.getElementById("input1");

function WordCount() {
  input = 0;
  a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i <= a.length; i++) {
    b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let j = 0; j <= b.length; j++) {
      c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let k = 0; k <= c.length; k++) {
        var inputText = document.getElementById("input1").value;
        var cnt = inputText.split(" ").length;
        document.getElementById("div1").innerHTML = cnt;
      }
    }
  }
}
inputText.addEventListener("input", WordCount);
