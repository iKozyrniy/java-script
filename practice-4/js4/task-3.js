let letters;
const myName = 'Саша';
const mySurname = 'Козырев';

if ((myName.length) > 4 && (mySurname.length > 5)) {
    letters = (myName.length + mySurname.length);
} else {
    letters = 'УПС';
}

console.log(letters);