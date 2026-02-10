const rezultat = document.getElementById("rezultat");
document.getElementById("izvedi").addEventListener("click", () => {
  rezultat.innerHTML = "";
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const zadatak = document.getElementById("zadatak").value;
  var x, y;
  var arr = [];
  var temp = [];
  var index;

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
        arr = [...arr, "X"];
        rezultat.innerHTML = arr;
      } else {
        arr = ["Y", ...arr];
        rezultat.innerHTML = arr;
      }

      return;
    case "5":
      arr = [a, 123, "zadatak5", true, null, undefined, Symbol];
      x = Number(a);

      if (a === "") {
        arr[0] = undefined;
      } else if (!isNaN(x)) {
        arr[0] = Number(x);
      } else if (a.toLowerCase() === "true") {
        arr[0] = true;
      } else if (a.toLowerCase() === "false") {
        arr[0] = false;
      } else {
        arr[0] = a;
      }

      switch (typeof arr[0]) {
        case "string":
          rezultat.innerHTML = `${arr[0]} je string.`;
          break;
        case "number":
          rezultat.innerHTML = `${arr[0]} je broj.`;
          break;
        case "boolean":
          rezultat.innerHTML = `${arr[0]} je boolean.`;
          break;
        case "undefined":
          rezultat.innerHTML = `a je undefined.`;
          break;
        default:
          rezultat.innerHTML = "Greška";
          break;
      }

      return;
    case "6":
      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }
      arr = [a, b, "KRAJ"];
      arr.length = arr.length - 1;
      rezultat.innerHTML = arr;
      return;
    case "7":
      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }
      arr = [a, 2];
      temp = [b, 4];
      rezultat.innerHTML = [arr, ...temp];
      return;
    case "8":
      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }
      arr = [a, ,b];
      rezultat.innerHTML = arr[1];
      return;
    case "9":
      if (!a || !b) {
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }
      arr = [a, b, 7, 6];
      var [first, ...rest] = arr;
      rezultat.innerHTML = "Prvi: " + first + "<br>Ostatak: " + rest;
      return;
    case "10":
      x = Number(b);
      switch (true) {
        case a === "" || b === "":
            arr = [];
            break;
        case a === b:
            arr = [a];
            break;
        case !isNaN(x) && x === 2:
            arr = [a, b];
            break;
        default:
            arr = [a, b, "x"];
            break;
      }
      rezultat.innerHTML = "Array: " + arr;
      return;
  }
});
