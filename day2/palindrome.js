function isPalindrome(str){
    //1
    const word = str.split(' ').join('')
    // let word = []
    // for (let j=0; j < str.length; j++){
    //   if (str[j] != ' '){
    //     word.push(str[j])
    //   }
    // }
    for (let i=0; i<Math.floor(word.length/2); i++){
      let left = word[i];
      let right = word[word.length-1-i];
      if (left != right){
        return false
      }
    }
    return true
}
console.log(
    isPalindrome('a santa at nasa'),  // true
    isPalindrome('google')  // false
  )