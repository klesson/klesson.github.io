(function() {
    function getUrlVar(){
        var urlVar = window.location.search; // получаем параметры из урла
        var arrayVar = []; // массив для хранения переменных
        var valueAndKey = []; // массив для временного хранения значения и имени переменной
        var resultArray = []; // массив для хранения переменных
        arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
        if(arrayVar[0]=="") return false; // если нет переменных в урле
        for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
            valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
            resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
        }
        return resultArray; // возвращаем результат
    }
    window.onload = function() {
        var params = getUrlVar();
        console.log('url params', params);
        
        if (!params) {
            //не авторизован, покажем панель авторизации
            document.getElementById('auth').classList.remove('hidden');
        } else {
            //авторизован, покажем нашу панель
            //и установим на ней данные из вконтакте
            document.getElementsByClassName('container__card__info__name')[0].textContent = decodeURIComponent(params.first_name) + ' ' + decodeURIComponent(params.last_name);
            document.getElementById('img').setAttribute('src', params.photo.split('%')[0]);
            document.getElementById('card').classList.remove('hidden');            
            
            //params.uid
        }
    }
})();