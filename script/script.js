function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var want = confirm("Хочешь пройти испытание?");
if (want == true) {
    var z = 0;

    var slo = prompt("Выберите сложность от 1 до 3?")

    while ((slo>3) || (slo<1) || (isNaN(slo))) {
      var  slo = prompt("           Неверное значение \n Выберите сложность от 1 до 3? ")
    }

    var count = prompt("Какое количество испытаний?")
    while (isNaN(count)) {
        count = prompt("           Неверное значение \nКакое количество испытаний?")
    }
    alert("Вы выбрали " + slo + "-ую сложность " + count + "раз(а)!")

   


    if (slo == 1) {
        var zlo = 9;
    }

    if (slo == 2) {
        var zlo = 20;
    }

    if (slo == 3) {
        var zlo = 99;
    }

    for (var x = 0; x < count; x++) {
        var a = (getRandomInRange(1, zlo));
        var b = (getRandomInRange(1, zlo));
        var Op = (getRandomInRange(1, 4));

        if (Op == 1) {
            op = "-";
        }
        if (Op == 2) {
            op = "+";
        }
        if (Op == 3) {
            op = "*";
        }


        function mathOp(a, b, op) {
            if (op == "-") {
                var res = a - b;
            } else if (op == "+") {
                res = Number(a) + Number(b);
            } else if (op == "*") {
                res = a * b;
            }

            return res;
        };

        res = mathOp(a, b, op)

        var vod = (prompt(a + " " + op + " " + b + " =? "));


        while (vod != res) {
            alert("Неправильно, попробуй ещё =)");
            vod = (prompt(a + " " + op + " " + b + " =? "));
            z = z + 1
        }

        if (vod == res) {
            alert("Правильно, молодец!");

        }



    }
    if (z == 0) {
        alert("Поздравляю, вы завершили испытания без ошибок!")
    } else {
        alert("Вы ошиблись " + z + " раз")
    }

}

// do{ var slo = prompt("Выберите сложность от 1 до 3?")}
// while((slo == isNaN) || (slo>3) || (slo<0));
