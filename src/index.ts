import NumberList from "./js/NumberList";
import StringList from "./js/StringList";

const numberList = new NumberList(100, 1, 4, 2, 3, 4, 5, 1);
numberList.sort();
console.log(numberList.numbers);

const word = new StringList("dimana");
word.sort();
console.log(word.word);
