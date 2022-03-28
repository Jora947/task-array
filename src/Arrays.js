/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let spl = data.split(',');
    let srt = spl.map(function (item) {
        return parseFloat(item);
    });
    srt.sort(function (a, b) {
        return a - b;
    });
    return srt.toString();
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let total = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 100) {
            total.push(data[i]);
        }
    }
    return total;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    var c = [];
    for (var i = 0; i < array1.length; i++) {
        c.push([array1[i], array2[i]]);
    }
    var merged = [];
    merged = merged.concat.apply(merged, c);
    return merged;
}
