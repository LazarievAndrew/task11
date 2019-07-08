// Написать функцию которая будет принимать натуральное число
// и выводить слово YES, если число является точной степенью двойки,
// или слово NO в противном случае.

// Решение с помощью циклов:

function degreeСycle(){
    var number = +prompt('Введите любое натуральное число');
    while (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
        number = +prompt('Введите число корректно');
    }
    for (var base = 1; base <= number; base *=2){
        if (base === number){
            alert ('// Цикл// Число является точной степенью двойки--"YES"');
            break;
        }
    }
    if(base > number){
        alert ('//Цикл// Число не является точной степенью двойки--"NO"');
    }
}    

degreeСycle();

// Решение с помощью рекурсии:

var number = +prompt('Введите любое натуральное число');

function degreeRecursion (x) {
    while (isNaN(x) || x <= 0) {
        x = +prompt('Введите корректно любое натуральное число');
    }
    var base = 1;
    if (x === base){
        alert ('//Рекурсия// Число является точной степенью двойки--"YES"');
    } else if (base < x){
        degreeRecursion(x / 2);   
    } else {
        alert ('//Рекурсия// Число не является точной степенью двойки--"NO"');
    }
}

degreeRecursion(number);