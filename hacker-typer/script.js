// ВАЖНО!
//
// Для корректной работы скрипта необходимо запустить в корневой
// директории http-сервер. Иначе ничего работать не будет (грусть-печаль).
//
// КОНЕЦ

"use strict"

function readFile(path) {
    var result = null;
    $.ajax({
        url: path,
        type: 'get',
        dataType: 'text',
        async: false,
        success: function(data) {
            result = data;
        }
    });
   return result;
}

var codeElem = document.querySelector('.code');
var codeString = readFile('code.txt');
var i = 0;

document.addEventListener("keydown", function(event) {
    var code = event.keyCode;
    if (code >= 65 && code <= 90) {
        codeElem.innerHTML += codeString.slice(i, i + 5);
        i += 5;
        window.scrollBy(0, 50);
    }
});
