function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var want = confirm("Хочешь пройти испытание?");
if (want == true) {
    var z = 0;
    var count = prompt("Какое количество испытаний?")
    
    for (var x = 0; x < count; x++) {
        var a = (getRandomInRange(1, 9));
        var b = (getRandomInRange(1, 9));
        var res = a * b;
    
        var vod = (prompt(a + " * " + b + " =? "));
    
    
            
        while(vod != res) {
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


