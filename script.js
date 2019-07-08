// Написать функцию которая будет принимать натуральное число
// и выводить слово YES, если число является точной степенью двойки,
// или слово NO в противном случае.

var number = +prompt('Введите любое натуральное число');

// Решение с помощью циклов:

function degreeСycle(x){
    while (isNaN(x) || x <= 0 || !Number.isInteger(x)) {
        x = +prompt('Введите число корректно');
    }
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
    while (isNaN(x) || x <= 0) {
        x = +prompt('Введите корректно любое натуральное число');
    }
    if (x === 1){
        alert ('//Рекурсия// Число является точной степенью двойки--"YES"');
    } else if (x > 1){
        degreeRecursion(x / 2);   
    } else {
        alert ('//Рекурсия// Число не является точной степенью двойки--"NO"');
    }
}

degreeRecursion(number);