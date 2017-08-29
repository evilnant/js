function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
}

var want = confirm("Хочешь пройти испытание?");
if (want == true) {
    var z = 0;

    var slo = prompt("Выберите сложность от 1 до 3?");

    while ((slo > 3) || (slo < 1) || (isNaN(slo))) {
        var slo = prompt("           Неверное значение \n Выберите сложность от 1 до 3? ");
    }

    var count = prompt("Какое количество испытаний?");
    while (isNaN(count)) {
        count = prompt("           Неверное значение \nКакое количество испытаний?");
    }

    if(count == 3 || 4 || 2 || 22 || 23 || 24 || 32 || 33 || 34 || 42 || 43 || 44 ||
        52 || 53 || 54 || 62 || 63 || 64) {
        slovo = " примера.";
    }else if (count == 1 || 21 || 31 || 41 || 51 || 61) {
        slovo = " пример.";
    } else {
        slovo = " примеров.";
    }

    if (slo == 1) {
        var zlo = 9;
        var OK = 2;
    }

    if (slo == 2) {
        var zlo = 20;
        var OK = 3;
    }

    if (slo == 3) {
        var zlo = 99;
        var OK = 4;
    }

    alert("Вы выбрали " + slo + "-ую сложность и " + count + slovo +" У вас "+(OK+1)+ " попытки на каждый пример.");




   

    for (var x = 0; x < count; x++) {
        var a = (getRandomInRange(1, zlo));
        var b = (getRandomInRange(1, zlo));
        var Op = (getRandomInRange(1, 4));
        var op = "*";

        if (Op == 1) {
            op = "-";
        }
        if (Op == 2) {
            op = "+";
        }
        if (Op == 3) {
            op = "*";
        }




        res = mathOp(a, b, op);

        var vod = (prompt("                 " + (x + 1) + "/" + count + " испытание. \n \n        " + a + " " + op + " " + b + " =? " + "             Попыток : " + (OK+1)));




        if (vod == res) {
            alert("Правильно, молодец!");

        } else if (vod != res) {
            for (OK; OK > 0; OK--) {
                alert("Неправильно, попробуй ещё раз!");
                vod = (prompt( "           " + (x + 1) + "/" + count + " испытание. \n \n"+ a + " " + op + " " + b + " =? " + "             Попыток : " + OK));
                z = z + 1;
                if (vod == res) {
                    alert("Правильно, молодец!");
                    break;
                }
                
            }
            break;
        }
       

    }
    if (z == 0) {
        alert("Поздравляю, вы завершили испытания без ошибок!");
    }else if (OK == 0) {
        alert("Правильнйы ответ : " + a + " " + op + " " + b + " = " + res + "\n ВЫ НЕ ПРОШЛИ ИСПЫТАНИЕ =(");
    } else{
        alert("Поздравляю, вы завершили испытание ошибившись " + z + " раз(a), в следуюший раз будет лучше!");
    }
    

}

// do{ var slo = prompt("Выберите сложность от 1 до 3?")}
// while((slo == isNaN) || (slo>3) || (slo<0));
