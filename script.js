function calculate() {
  let exchange = currency1.value;
  let result = exchange * 1.17;
  currency2.value = result.toFixed(2).replace(".", ",");
}
