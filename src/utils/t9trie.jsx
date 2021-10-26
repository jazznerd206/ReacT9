import HashMap from 'hashmap';

export class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0;
    }
    insert(v, word) {
        let curr = this.root;
        for (let i = 0; i < v.length; i++) {
            let char = v[i];
            // console.log(char);
            if (!curr.map.has(char)) {
                curr.map.set(char, new Node());
            }
            curr = curr.map.get(char);
        }
        curr.words.push(word);
        ++this.size;
        return;
    }
    lookup(v) {
        let curr = this.root;
        for (let i = 0; i < v.length; i++) {
            let char = parseInt(v[i]);
            console.log('char :>> ', typeof char);
            if (!curr.map.has(char)) {
                return [];
            }
            curr = curr.map.get(char);
        }
        return curr.words;
    }
    deepLookup(v) {
        let curr = this.root;
        for (let i = 0; i < v.length; i++) {
            let char = v[i];
            if (!curr.map.has(char)) {
                return;
            }
            curr = curr.map.get(char);
        }
        return deepLookupHelper(curr);
    }
    charTot9(ch) {
        if ('a' <= ch && ch <= 'c') {
            return 2;
        }
        else if ('d' <= ch && ch <= 'f')
            return 3;
        else if ('g' <= ch && ch <= 'i')
            return 4;
        else if ('j' <= ch && ch <= 'l')
            return 5;
        else if ('m' <= ch && ch <= 'o')
            return 6;
        else if ('p' <= ch && ch <= 's')
            return 7;
        else if ('t' <= ch && ch <= 'v')
            return 8;
        else if ('w' <= ch && ch <= 'z')
            return 9;
        else {
            console.log('zero case');
            return 0;
        }
    }
    wordTot9(word) {
        let t9 = [];
        for (let i = 0; i < word.length; i++) {
            t9[i] = this.charTot9(word.charAt(i));
        }
        return t9;
    }
    containsLettersOnly(word) {
        for (let i = 0; i < word.length; i++) {
            if (!word.charAt(i).match(/[a-zA-Z]/)) {
                return false;
            }
        }
        return true;
    }
    toIntArray(string) {
        let t9 = [];
        for (let i = 0; i < string.length; i++) {
            t9[i] = input.charAt(i) - '0';
        }
        console.log('t9 :>> ', t9);
        return t9;
    }
}
class Node {
    constructor() {
        this.words = [];
        this.map = new HashMap();
    }
}
Trie.prototype.size = function() {
    return this.size;
}
function deepLookupHelper(curr) {
    if (curr === null) {
        return [];
    }
    if (curr.map.size === 0) {
        return curr.words;
    }
    let mergedResult = [];
    for (let next of curr.map.values()) {
        let words = deepLookupHelper(next);
        for (let word of words) {
            mergedResult.push(word);
        }
    }
    return mergedResult;
}

export const CreateTrie = list => {
    let t = new Trie();
    for (let i = 0; i < list.length; i++) {
        try {
            t.insert(list[i]);
        } catch (err) {
            console.log(err);
        }
    }
    return t;
}

export const InsertIntoTrie = (trie, value) => {
    return trie.insert(value);
}

export const SearchTrie = (trie, value) => {
    return trie.deepLookup(value);
}