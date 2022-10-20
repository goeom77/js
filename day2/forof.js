// for … of 문을 사용하여 배열의 각 요소들 중 홀수 요소 들로만 구성된 새로운 배열을 생성하시오.

const newnumber = []
for (const number of numbers){
    if (number%2 === 1){
    newnumber.push(number)
    }
}
console.log(newnumber)