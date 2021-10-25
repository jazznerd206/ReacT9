import React, { useState, useEffect } from 'react';
import { CreateTrie, SearchTrie, InsertIntoTrie } from '../utils/t9trie.jsx';
import text from '../utils/words.txt';

export const buildTrie = () => {
    let trie;
    let singleWord = '';
    let words = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n' ) {
            words.push(singleWord);
            singleWord = [];
        } else {
            singleWord = singleWord + text[i];
        }
    }
    trie = CreateTrie(words);
    return trie;
}