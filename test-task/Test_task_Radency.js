/*
Завдання до виконання мовою JavaScript
Джон і Мері хочуть подорожувати між кількома містами А, В, С.... Мері має на аркуші паперу список відстаней між цими містами. ls = [51, 56, 58, 59, 61].
Джон втомився їздити, і він каже Мері, що не хоче їхати більше t = 174 милі, і він відвідає лише 3 міста. Які відстані, а отже,
які міста вони оберуть, щоб сума відстаней була якомога більшою, щоб догодити Мері та Джону?

Приклад:
Маючи список ls та 3 міста для відвідування, вони можуть зробити вибір між: [51,56,58], [51,56,59], [51,56,61],
[51,58,59], [51, 58,61], [51,59,61], [56,58,59], [56,58,61], [56,59,61], [58,59,61].

Тоді суми відстаней складають: 165, 166, 168, 168, 170, 171, 173, 175, 176, 178.

Найбільшою можливою сумою з урахуванням обмеження в 174 є 173, а відстані до 3 відповідних міст - [56, 58, 59].

Функція chooseBestDistance приймає параметри:
t (максимальна сума відстаней, ціле число >= 0),
k (кількість міст, які потрібно відвідати, k> = 1),
ls (список відстаней, всі відстані є додатними або нульовими цілими числами, і цей список містить принаймні один елемент).

Функція повертає "найкращу" суму, тобто найбільшу можливу суму k відстаней, менших або рівних заданій межі t, якщо ця сума існує, або якщо не існує - null.
Примітка: не змінюйте змінну ls.

Початковий код
const chooseBestDistance = (t, k, ls) => {
    // твій код
    return null;
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseBestDistance(163, 3, [50]); // null
*/

const chooseBestDistance = (t, k, ls) => {
    let n = ls.length;
    if (k <= n) {
        let combIndex = [];
        let combElements = [];
        let maxSum = 0;
        for(let i = 0; i < k; i++){
            combIndex[i] = i;
            if(i + 1 === k){
                combIndex[k] = n;
                combIndex[k + 1] = 0;
                combElements[0] = combIndex.slice(0, k);
            }
        }
        for(let i = 0, j = 1; ;){
            if(combIndex[i] + 1 === combIndex[i + 1]){
                combIndex[i] = i;
                i++;
            } else {
                if(i < k) {
                    combIndex[i] = combIndex[i] + 1;
                    combElements[j] = combIndex.slice(0, k);
                    j++;
                    i = 0;
                } else break;
            }
        }
        for(let i = 0, buffSum = 0; i < combElements.length; i++){
            for(let j = 0; j < k; j++){
                combElements[i][j] = ls[combElements[i][j]];
                buffSum = buffSum + combElements[i][j];
            }
            if(maxSum < buffSum && buffSum <= t){
                maxSum = buffSum;
            }
            buffSum = 0;
        }
        return maxSum;
    } else
        return null;
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseBestDistance(163, 3, [50]); // null

//console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61]));
//console.log(chooseBestDistance(163, 3, [50]));