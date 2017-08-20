function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var z = 0;

for (var x = 0; x < 4; x++) {
    var a = (getRandomInRange(1, 20));
    var b = (getRandomInRange(1, 99));
    var res = a * b;

    var vod = (prompt(a + " * " + b + " =? "));



    if (vod == res) {
        alert("Правильно");
        z = z + 1

    } else {
        alert("Неправильно ");

    }

}
alert("Вы дали " + z + " правильных ответов из 4")