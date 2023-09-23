
        /*
        Задание 1:
        Внесите правки в данный код. Сделайте, чтобы при наличии ошибки во время восстановления объекта из JSON строки
        выводилось сообщение - "Ошибка при чтении JSON"
        */

        let json = '{"name" : "Ivan", "age" : "20"}';

        try{
            let obj = JSON.parse(json);
            console.log(obj.name);
            console.log(obj.age);
        } catch(error) {
            console.error('Ошибка при чтении JSON');
        }