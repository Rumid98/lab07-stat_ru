function sum(numbers) {
    let s = 0
    numbers.forEach((n) => {s += n})
    return s
}

function avg(numbers) {
    return sum(numbers) / numbers.length
}

function max(numbers) {
    let m = numbers[0]
    for (let i=0; i<numbers.length; i++) {
        if (m < numbers[i]) {
            m = numbers[i]
        }
    }
    return m
}

function med(numbers) {
    let answer
    numbers.sort(function (a,b) {
        return a - b
    })
    
    if (numbers.length % 2 == 1) {  // 숫자 개수가 홀수
        answer = numbers[parseInt(numbers.length/2)]
        return answer
    } else {  // 숫자 개수가 짝수
        answer = (numbers[numbers.length/2 - 1] + numbers[numbers.length/2]) / 2
        return answer
    }
}

function iqr(numbers) {
    let answer
    let sub_arr1, sub_arr2
    numbers.sort(function (a,b) {
        return a - b
    })
   
    sub_arr1 = numbers.slice(0, parseInt(numbers.length/2))
    if (numbers.length % 2 == 1) {  // 숫자 개수가 홀수
        sub_arr2 = numbers.slice(parseInt(numbers.length/2) + 1)
        answer = Math.abs(med(sub_arr1) - med(sub_arr2))
    } else {  // 숫자 개수가 짝수
        sub_arr2 = numbers.slice(parseInt(numbers.length/2))
        answer = Math.abs(med(sub_arr1) - med(sub_arr2))
    }

    return answer
}

function outlier(numbers) {
    let sub_arr1, sub_arr2
    let new_numbers = JSON.parse(JSON.stringify(numbers))
    new_numbers.sort(function (a,b) {
        return a - b
    })
    
    sub_arr1 = new_numbers.slice(0, parseFloat(new_numbers.length/2))
    if (new_numbers.length % 2 == 1) {  // 숫자 개수가 홀수
        sub_arr2 = numbers.slice(parseInt(new_numbers.length/2) + 1)
    } else {  // 숫자 개수가 짝수
        sub_arr2 = new_numbers.slice(parseInt(new_numbers.length/2))
    }

    const Q1 = med(sub_arr1)
    const Q3 = med(sub_arr2)
    const IQR = iqr(new_numbers)

    numbers.forEach((n) => {
        if (n < (Q1 - (1.5)*IQR) || n > (Q3 + (1.5)*IQR)) {
            console.log(n)
        }
    })
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
}
