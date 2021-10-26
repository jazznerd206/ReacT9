import React, { useState, useEffect } from 'react';
import { Trie, CreateTrie, SearchTrie, InsertIntoTrie } from '../utils/t9trie.jsx';
import text from '../utils/words.txt';

export const buildTrie = () => {
    let trie = new Trie();
    let singleWord = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n' ) {
            if (trie.containsLettersOnly(singleWord) === true) {
                trie.insert(trie.wordTot9(singleWord), singleWord);
            }
            singleWord = '';
        } else {
            singleWord = singleWord + text[i].toLowerCase();;
        }
    }
    return trie;
}