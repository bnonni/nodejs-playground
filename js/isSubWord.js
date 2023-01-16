/** 

Assume you have a Web Service with two endpoints:

/endpoint/allWords - returns all valid English words

/endpoint/isSubWord?word=ABCD - returns true/false if ‘word’ is SUBWORDABLE. 

Implement the isSubWord endpoint by creating a function that returns 
true or false if an English word is SUBWORDABLE. 
Subwordable means that you can remove one letter from anywhere in 
the string, and after removing that letter, what remains is still an English word. 
This must continue until only two characters are left, which must also be a word. 
 
For example: SPRINT -> PRINT -> PINT -> PIT -> IT
For example: TOOLS -> TOOL -> TOO -> TO
 
SPRINT & TOOLS are Subwordable.
 
An example of an un-subwordable word:
FLAKE -> LAKE -> (AKE, FKE, FAE are not English words)
FLAKE -> FAKE -> (AKE, FKE, FAE are not English words)
FLKE - X
FLAE - X
FLAK - X

// Given:
//  Set<String> dictionaryEnglish = ...;

*/

const dictionaryEnglish = new Set([
    'FLAKE',
    'LAKE',
    'FAKE',
    'SPRINT',
    'PRINT',
    'PINT',
    'PIT',
    'IT',
    'TOOLS',
    'TOOL',
    'TOO',
    'TO',
]);

const isWord = (newWord) => {
    if (newWord.length <= 2) return false;
    console.log('isWord', dictionaryEnglish.has(newWord));
    return dictionaryEnglish.has(newWord);
};

const isSubWord = (word) => {
    if (!isWord(word)) return false;

    const letters = Array.from(word);
    const popped = [];
    let i = 0;

    while (i <= word.length - 1) {
        console.log(`i=${i}`)
        console.log('letters 1', letters);
        console.log('popped 1', popped);
        popped.push(letters.splice(i, 1)[0]);
        console.log('letters 2', letters);
        console.log('popped 2', popped);
        const newWord = letters.join('');
        console.log('newWord', newWord);
        if (isWord(newWord)) {
            i += 1;
            continue;
        }
    }
    return true;
};

// console.log(isSubWord('FLAKE'));
console.log(isSubWord('SPRINT'));

/**
    console.log('letters 1', letters);
    console.log('popped 1', popped);
    popped.push(letters.shift());
    console.log('letters 2', letters);
    console.log('popped 2', popped);

    const newWord = letters.join('');
    console.log('newWord', newWord);
    if (isWord(newWord)) continue;

    popped.push(letters.shift());
    console.log('letters 3', letters);
    console.log('popped 3', popped);

    console.log('letters 4', letters);
    console.log('popped 4', popped);
    letters.unshift(popped.shift());
    console.log('letters 5', letters);
    console.log('popped 5', popped);
 */
