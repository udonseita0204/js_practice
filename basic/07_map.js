const scores = [80, 92, 67, 100];

const add=scores.map(num=>num+10);
const dobled=scores.map(score=>score*2);
const passed=scores.filter(score=>score>80);

console.log(add)
console.log(dobled)
console.log(passed)
