const rezultat = document.getElementById("rezultat");
document.getElementById("izvedi").addEventListener("click", () => {
  rezultat.innerHTML = "";
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const zadatak = document.getElementById("zadatak").value;
  var x, y;
  var arr = [];
  var index;
  var temp;

  switch (zadatak) {
    case "1":
      x = Number(a);
      y = Number(b);
      arr = [x, 20, 30, y];

      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }

      if (isNaN(x) || isNaN(y)) {
        rezultat.innerHTML = "Molim upišite samo brojeve!";
        return;
      }

      // rezultat.innerHTML = `Prvi: ${x}, Zadnji: ${y}`;
      rezultat.innerHTML = `Prvi: ${arr[0]},<br> Zadnji: ${arr[arr.length - 1]}<br>Niz: ${arr}`;

      return;
    case "2":
      y = Number(b);
      arr = ["a", a, "c"];

      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }

      if (isNaN(y)) {
        index = b.length;
      } else {
        index = b;
      }

      rezultat.innerHTML =
        index < arr.length
          ? "Index je: " + index + "<br>Element indexa: " + arr[index]
          : "Index je prevelik";

      return;
    case "3":
      arr = [a, b, 3];
      temp = [...arr];

      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }

      if (arr.length >= 2) {
        temp[0] = arr[1];
        temp[1] = arr[0];
        rezultat.innerHTML = "Zamjenjen array: " + temp;
      }
      return;
    case "4":
      arr = [a, b];

      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }

      if (typeof a === "string" && a.length < 3) {
        console.log(a.length);
        console.log(arr);
        arr = [...arr, "X"];
        console.log(arr);

        rezultat.innerHTML = arr;
      } else {
        arr = ["Y", ...arr];
        rezultat.innerHTML = arr;
      }

      return;
    case "5":
      return;
    case "6":
      return;
    case "7":
      return;
    case "8":
      return;
    case "9":
      return;
    case "10":
      return;
  }
});
