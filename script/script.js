function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var want = confirm("Хочешь пройти испытание?");
if (want == true) {
    var z = 0;

    var slo = prompt("Выберите сложность от 1 до 3?")
    var count = prompt("Какое количество испытаний?")
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
        var res = a * b;

        var vod = (prompt(a + " * " + b + " =? "));



        while (vod != res) {
            alert("Неправильно, попробуй ещё =)");
            vod = (prompt(a + " * " + b + " =? "));
            z = z + 1
        }

        if (vod == res) {
            alert("Правильно, молодец!");

        }



    }
    alert("Вы ошиблись " + z + " раз")

}