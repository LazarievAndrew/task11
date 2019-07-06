// Написать функцию которая будет принимать натуральное число
// и выводить слово YES, если число является точной степенью двойки,
// или слово NO в противном случае.


function input (){
    var num = +prompt('Введите любое натуральное число');
    while (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
        num = +prompt('Введите число корректно');
    }
    return num;
}

var number = input();

// Решение с помощью циклов:

function degreeСycle(x){
    for (var base = 1; base <= x; base *=2){
        if (base === x){
            alert ('// Цикл// Число является точной степенью двойки--"YES"');
            break;
        }
    }

    if(base > x){
        alert ('//Цикл// Число не является точной степенью двойки--"NO"');
    }
}    

degreeСycle(number);

// Решение с помощью рекурсии:

function degreeRecursion (x) {
    if (x === 1){
        alert ('//Рекурсия// Число является точной степенью двойки--"YES"');
    } else if (x > 1){
        degreeRecursion(x/2);
    } else {
        alert ('//Рекурсия// Число не является точной степенью двойки--"NO"');
    }
}

degreeRecursion(number);