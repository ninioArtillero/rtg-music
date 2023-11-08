const { euclideanPattern } = require ('./bjorklund')

test ('ritmo euclidiano (3,8)', () => {
  expect (euclideanPattern(3,8)).toStrictEqual([1,0,0,1,0,0,1,0]);
});

test ('ritmo euclidiano (7,12)', () => {
  expect (euclideanPattern(7,12)).toStrictEqual([1,0,1,1,0,1,0,1,1,0,1,0]);
});

test ('pulso isócrono sencillo', () => {
  expect (euclideanPattern(4,4)).toStrictEqual([1,1,1,1]);
});

test ('pulso isócrono compuesto', () => {
  expect (euclideanPattern(3,6)).toStrictEqual([1,0,1,0,1,0]);
});

test ('pulso isócrono en silencio', () => {
  expect (euclideanPattern(0,4)).toStrictEqual([0,0,0,0]);
});

test ('patrón vacío', () => {
  expect (euclideanPattern(0,0)).toStrictEqual([]);
});
