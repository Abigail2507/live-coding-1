function bigWords(inputWord, wordArray) {
    return wordArray.filter(word => word.length > inputWord.length);
}


function printArray(wordArray) {
    const list = document.getElementById("outputList");
    list.innerHTML = ""; 
    wordArray.forEach(word => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        list.appendChild(listItem);
    });
}


function processInput() {
    const inputWord = document.getElementById("inputWord").value.trim();
    const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']; 
    printArray(filteredArray);
}
