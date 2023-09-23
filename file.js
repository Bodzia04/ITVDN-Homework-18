
        /*
        Задание 1:
        Внесите правки в данный код. Сделайте, чтобы при наличии ошибки во время восстановления объекта из JSON строки
        выводилось сообщение - "Ошибка при чтении JSON"
        */

        // let json = '{"name" : "Ivan", "age" : "20"}';

        // try{
        //     let obj = JSON.parse(json);
        //     console.log(obj.name);
        //     console.log(obj.age);
        // } catch(error) {
        //     console.error('Ошибка при чтении JSON');
        // }

//////////////////////////////////////////////////


        /*
        Задание 2:
        Внесите правки в функцию sum. Сделайте так, чтобы при отсутствии одного из параметров, функция выбрасывала ошибку.        
        */

        function sum(a, b) {
            if(!a) throw new Error("Значення параметра a обов'язкове");
            if(!b) throw new Error("Значення параметра b обов'язкове");

            return a + b;
        }

        try {
            let result = sum(1, 5);
            console.log(result);

            result = sum(10);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }

//////////////////////////////////////////////////

    