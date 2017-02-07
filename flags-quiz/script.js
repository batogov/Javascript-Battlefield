"use strict";

(function() {

    // список кодов стран
    var flagsCodes = {
        "Легко" : ["ca", "ch", "de", "fi", "fr",
                   "gr", "jp", "ru", "us", "ua"],
        "Нормально" : ["il", "dk", "cz", "it", "tr",
                       "se", "no", "by", "eg", "cn"],
        "Сложно" : ["ge", "si", "sa", "pr", "nz",
                    "jm", "kr", "ar", "es", "gb-wls"],
        "Очень сложно" : ["za", "sy", "pw", "py", "ly",
                          "qa", "af", "ki", "lc", "me"]
    };

    // список названий стран
    var countriesNames = {
        "Легко" : ["Канада", "Швейцария", "Германия", "Финляндия", "Франция",
                   "Греция", "Япония", "Россия", "США", "Украина"],
        "Нормально" : ["Израиль", "Дания", "Чехия", "Италия", "Турция",
                       "Швеция", "Норвегия", "Белоруссия", "Египет", "Китай"],
        "Сложно" : ["Грузия", "Словения", "Саудовская Аравия", "Пуэрто-Рико", "Новая Зеландия",
                    "Ямайка", "Корея", "Аргентина", "Испания", "Уэльс"],
        "Очень сложно" : ["ЮАР", "Сирия", "Палау", "Парагвай", "Ливия",
                          "Катар", "Афганистан", "Кирибати", "Сент-Люсия", "Черногория"]
    };

    // финальные реплики
    var resultDescs = ['Очень плохой результат! Ты не справился даже с простейшими флагами.',
                       'Плохо. Тебе определённо не следовало прогуливать географию.',
                       'Неплохо. По крайней мере, ты отличаешь самые простые флаги друг от друга.',
                       'Хорошо! Твой результат показывает, что ты знаток во флагах!',
                       'Отлично! Из тебя выйдет замечательный географ!',
                       'Потрясающе! Ты верно ответил на все вопросы!']

    // тут хранятся индексы стран, флаги которых уже были
    var doneList = [];

    // название текущей страны
    var currentName;

    // кол-во отвеченных вопросов, кол-во правильных ответов
    var answeredCount = 0, rightCount = 0;

    // уровень сложности
    var level;

    init();


    function getResultDesc(ratio) {
        if (ratio == 0) {
            return resultDescs[0];
        } else if (ratio > 0 && ratio <= 0.25) {
            return resultDescs[1];
        } else if (ratio > 0.25 && ratio <= 0.5) {
            return resultDescs[2];
        } else if (ratio > 0.5 && ratio <= 0.75) {
            return resultDescs[3];
        } else if (ratio > 0.75 && ratio < 1) {
            return resultDescs[4];
        } else {
            return resultDescs[5];
        }
    }


    function getRandomInt(maxValue, exceptionsList = []) {
        var randomInt;
        do {
            randomInt = Math.floor(Math.random() * maxValue);
        } while (exceptionsList.indexOf(randomInt) != -1)
        return randomInt;
    }


    function getRandomInts(maxValue, count, exceptionsList = []) {
        var intsList = [];
        var currentInt;
        while (intsList.length < count) {
            currentInt = getRandomInt(maxValue);
            if (intsList.indexOf(currentInt) == -1 &&
                exceptionsList.indexOf(currentInt) == -1) {
                intsList.push(currentInt);
            }
        }
        return intsList;
    }


    function shuffleList(list) {
        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }
        return list.sort(compareRandom);
    }


    function diffBtnClick() {
        level = this.textContent;

        document.querySelector(".intro").style.display = "none";
        document.querySelector(".game").style.display = "block";

        newQuestion();
    }


    function newGameBtnClick() {
        document.querySelector(".results").style.display = "none";
        document.querySelector(".intro").style.display = "block";

        doneList = [];
        answeredCount = 0;
        rightCount = 0;
    }


    function btnClick() {
        var answer = this.textContent;
        if (answer == currentName) {
            rightCount++;
        }
        answeredCount++;
        if (answeredCount < flagsCodes[level].length) {
            newQuestion();
        } else {
            showResults();
        }
    }


    function newQuestion() {
        var randomInt = getRandomInt(flagsCodes[level].length, doneList);

        doneList.push(randomInt);

        var currentFlag = flagsCodes[level][randomInt];
        currentName = countriesNames[level][randomInt];

        var randomInts = getRandomInts(flagsCodes[level].length, 3, [randomInt]);
        var names = [currentName];

        for (var i in randomInts) {
            names.push(countriesNames[level][randomInts[i]]);
        }

        // печатаем имена на кнопках
        names = shuffleList(names);
        for (var i in names) {
            document.getElementById(i).textContent = names[i];
        }

        document.querySelector(".flag-image").src = "flags/" + currentFlag + ".svg";
        document.querySelector(".status").textContent = (answeredCount + 1) + " / " + flagsCodes[level].length;
    }


    function showResults() {
        document.querySelector(".game").style.display = "none";
        document.querySelector(".results").style.display = "block";

        document.querySelector(".result-text").textContent = rightCount + " / " + answeredCount;
        document.querySelector(".result-desc").textContent = getResultDesc(rightCount / answeredCount);
    }


    function init() {
        // добавляем события для кнопок выбора сложности
        var diffButtons = document.querySelectorAll(".diff-button");
        for (var i = 0; i < 4; i++) {
            diffButtons[i].addEventListener("click", diffBtnClick);
        }

        // добавляем события для игровых кнопок
        for (var i = 0; i < 4; i++) {
            document.getElementById(i).addEventListener("click", btnClick);
        }

        // добавляем событие для кнопки новой игры
        document.getElementById("new-game-button").addEventListener("click", newGameBtnClick);
    }

})();
