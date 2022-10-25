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
    const len = numbers.length
    let answer
    numbers.sort()
    if (len % 2 == 1) {  // 숫자 개수가 홀수
        answer = numbers[parseInt(len/2)]
        return answer
    } else {  // 숫자 개수가 짝수
        answer = (numbers[len/2 - 1] + numbers[len/2]) / 2
        return answer
    }
}

function iqr(numbers) {
    
}

function outlier(numbers) {
    
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
}
