function avg(num1, num2) {
  if (num1 < 0 && num2 < 0) {
    return NaN;
  }

  if (+num1 && +num2) {
    return (num1 + num2) / 2;
  } else {
    return 0;
  }
}

export { avg };
