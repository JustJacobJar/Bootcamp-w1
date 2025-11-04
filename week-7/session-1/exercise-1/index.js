function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing n fibonacci sequence
v = 10;

for (let i = 0; i < v; i++) {
  console.log(fibonacci(i));
}
