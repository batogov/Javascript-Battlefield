function applyForVisa(data) {
    console.log('Обработка заявления на визу...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.5 ? resolve({number: Math.round(Math.random() * 1000)}) : reject('В визе отказано: нехватка документов');
        }, 1000);
    });
    return promise;
}

function getVisa(visa) {
    console.info(`Виза #${visa.number} получена`);
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), 1000);
    });
}

function bookHotel() {
    console.log('Бронируем отель...');
    return Promise.resolve();
}

function buyTickets() {
    console.log('Покупаем билеты...');
    return new Promise(function(resolve, reject) {
        Math.random() > 0.5 ? resolve() : reject('Билетов на данное направление нет :(');
    });
}

function success() {
    console.info('Всё готово! Наслаждайтесь отдыхом!');
}



applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .then(success)
    .catch(error => console.error(error));