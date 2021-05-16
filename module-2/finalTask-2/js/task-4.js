
const formatString = function (string) {
    if (string.length < 41) {
        return(string);
    } else {
        let array = string.split('');
        let a = array.splice(0, 39);
        return(`${a.join('')}...`);
    }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
