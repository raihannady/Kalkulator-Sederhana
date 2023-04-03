const insert = (par) => {
    calculator.field.value += par
  }

  const equal = () => {
    calculator.field.value = eval(calculator.field.value)
  }

  const ac = () => {
    calculator.field.value = ""
  }

  const del = () => {
    calculator.field.value = calculator.field.value.substring(-1, calculator.field.value.length - 1)
  }