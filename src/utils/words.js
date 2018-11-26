export const learnedWords = JSON.parse(localStorage.getItem('learned')) || [];
const setStorageItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));

export const setLearnedWord = (word) => {
   if (learnedWords.indexOf(word) < 0) {
       learnedWords.push(word);
       setStorageItem('learned', learnedWords)
   } else {
       alert('word exists');
   }
   
}

export const deleteLearnedWord = (word) => {
    let index = itExists(word);
    if (index >= 0) {
        learnedWords.splice(index, 1);
        setStorageItem('learned', learnedWords)
        alert(`Deleted ${word} successfully.`)
    } else if (index < 0) {
        alert("word doesn't exist");
    }
}

export const filterKnownWords = (words) => words.filter((word) => console.log(":::word:::", word) || itExists(word) ? false : true)

export const itExists = (word) => {
    return learnedWords.indexOf(word) >= 0;
}