function addNumbers(...num) {
    const numbers = [...num];
    return numbers.reduce((sum, number) => {
      return sum + number
    }, 0)
  }

  console.log(addNumbers(1, 2, 3, 4, 5))