const DIGIT = 7;

function g(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i.toString().includes(`${DIGIT}`)) count++;
  }
  return count;
}

module.exports = g;
