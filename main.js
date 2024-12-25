window.addEventListener('load', () => {
    const content = document.querySelector('#content');
    function addToBody(text) {
        const p = document.createElement('p');
        p.style = 'word-break: break-word;';
        p.textContent = text;
        content.appendChild(p);
    }
    function outputImportant(text) {
        const pImportant = document.querySelector('#important');
        pImportant.innerHTML += `<p><b>${text}</b></p>`;
    }

    fetch('https://ipinfo.io/json?token=58b135ec8aef37')
        .then((response) => response.json())
        .then((data) => {
            const { ip, city, region, country } = data;
            outputImportant(`IP-адрес: ${ip}`);
            outputImportant(`Примерное местоположение: ${city}, ${country}`);
        })
        .catch((err) => {
            addToBody(`Ошибка получения местоположения: ${err.message}`);
        });
        
    // addToBody('User-Agent: ' + navigator.userAgent);
    addToBody('Платформа: ' + navigator.platform);
    addToBody('Язык браузера: ' + navigator.language);
    addToBody('Список языков: ' + navigator.languages);
    addToBody('Cookie включены: ' + navigator.cookieEnabled);
    addToBody('Поддержка Java: ' + navigator.javaEnabled());
    addToBody('Количество ядер: ' + navigator.hardwareConcurrency);
    addToBody('Объём памяти устройства: ' + navigator.deviceMemory + ' GB');
    addToBody('Состояние сети: ' + (navigator.onLine ? 'Онлайн' : 'Оффлайн'));

    addToBody('Ширина экрана: ' + screen.width);
    addToBody('Высота экрана: ' + screen.height);
    addToBody('Доступная ширина экрана: ' + screen.availWidth);
    addToBody('Доступная высота экрана: ' + screen.availHeight);
    addToBody('Глубина цвета экрана: ' + screen.colorDepth);
    addToBody('Глубина пикселей: ' + screen.pixelDepth);

    const now = new Date();
    addToBody('Текущее время и дата: ' + now.toLocaleString());
    addToBody('Смещение часового пояса: ' + now.getTimezoneOffset() + ' минут');

    addToBody('Количество записей в истории: ' + history.length);
    addToBody('Состояние текущей записи: ' + JSON.stringify(history.state));

    addToBody('Время загрузки страницы: ' + performance.now() + ' мс');
    // addToBody('Использование памяти (если поддерживается): ' + JSON.stringify(performance.memory));
    // addToBody('Записи о производительности: ' + JSON.stringify(performance.getEntries()));

    navigator.getBattery().then((battery) => {
        addToBody('Уровень заряда: ' + (battery.level * 100) + '%');
        addToBody('Заряжается: ' + (battery.charging ? 'Да' : 'Нет'));
    });

    addToBody('Тип соединения: ' + navigator.connection.effectiveType);
    addToBody('Скорость соединения: ' + navigator.connection.downlink + ' Мбит/с');
    addToBody('Средняя задержка (RTT): ' + navigator.connection.rtt + ' мс');

    let i = 0;
    const goodEmo = document.querySelector('.good_emo');
    const badEmo = document.querySelector('.bad_emo');
    setInterval(() => {
        if (i >= 8) {
            if (i % 2 === 0) {
                goodEmo.style.cssText = 'display: none';
                badEmo.style.cssText = 'display: inline';
            }
            else {
                badEmo.style.cssText = 'display: none';
                goodEmo.style.cssText = 'display: inline';
            }
        }
        if (i > 10) {
            i = 0;
        }
        i++;
    }, 200);
});