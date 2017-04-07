'use strict';

function applyForVisa(data) {
    console.log('Обработка заявления на визу...');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({ number: Math.round(Math.random() * 1000) }) : reject('В визе отказано: нехватка документов');
        }, 1000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('\u0412\u0438\u0437\u0430 #' + visa.number + ' \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve();
        }, 1000);
    });
}

function bookHotel() {
    console.log('Бронируем отель...');
    return Promise.resolve();
}

function buyTickets() {
    console.log('Покупаем билеты...');
    return new Promise(function (resolve, reject) {
        Math.random() > 0.5 ? resolve() : reject('Билетов на данное направление нет :(');
    });
}

function success() {
    console.info('Всё готово! Наслаждайтесь отдыхом!');
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).then(success).catch(function (error) {
    return console.error(error);
});