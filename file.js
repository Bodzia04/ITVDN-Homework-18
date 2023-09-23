
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

        // function sum(a, b) {
        //     if(!a) throw new Error("Значення параметра a обов'язкове");
        //     if(!b) throw new Error("Значення параметра b обов'язкове");

        //     return a + b;
        // }

        // try {
        //     let result = sum(1, 5);
        //     console.log(result);

        //     result = sum(10);
        //     console.log(result);
        // } catch (error) {
        //     console.error(error.message);
        // }

//////////////////////////////////////////////////

        /*
        Задание 3:
        Добавьте в данный сценарий обработку исключений для той части кода, где исключение может возникнуть.
        */
        class Rect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
            }

            get width() {
                if (this._width === undefined) {
                    this._width = 0;
                }

                return this._width;
            }

            set width(value) {
                if (value < 0) {
                    throw new Error("Значение для width не может быть меньше 0");
                } else {
                    this._width = value;
                }
            }

            get height() {
                if (this._height === undefined) {
                    this._height = 0;
                }

                return this._height;
            }

            set height(value) {
                if (value < 0) {
                    throw new Error("Значение для height не может быть меньше 0");
                } else {
                    this._height = value;
                }
            }

            get area() {
                return this.height * this.width;
            }
        }

        let r1 = new Rect(10, 20);

        try{
            r1.height = -10; // ошибка
            r1.width = 30;
        } catch(error){
            console.error(error.message);
        }

        console.log("width " + r1.width);
        console.log("height " + r1.height);
        console.log("area " + r1.area);
    

// TODO:
        // в Task 3 я нічого не писав. потріно створити set area() і помістити throw
    

    