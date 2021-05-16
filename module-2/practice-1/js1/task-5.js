
let styles = ['Джаз', 'Блюз'];

styles[2] = 'Рок н ролл';
styles[1] = 'Классика';

console.log(styles.shift());
styles.unshift('Реп', 'Реггі');

console.log(styles);