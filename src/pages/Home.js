import React, { useState } from 'react'
import Button from '../components/Button'

export default function Home() {

    const [text, setText] = useState('');

    const clear = () => {
        setText("");
    }

    const handleOnChangeText = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };


    const removeSpaces = () => {
        // Replace multiple spaces with a single space
        let trimmedStr = text.replace(/\s+/g, ' ');

        // Trim leading and trailing spaces
        trimmedStr = trimmedStr.trim();
        setText(trimmedStr);
    }

    const Capitilize = () => {
        // Split the paragraph into words
        let words = text.split(' ');

        // Capitalize the first letter of each word
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        // Join the words back into a string
        let answer = words.join(' ');
        setText(answer);
    };

    const countWords = () => {
        // Trim leading and trailing whitespace
        let trimmedText = text.trim();

        // If the trimmed text is empty, return 0
        if (trimmedText === "") {
            return 0;
        }

        // Split the text into words using a regular expression
        const words = trimmedText.match(/\S+/g);

        // Return the length of the words array
        return words ? words.length : 0;
    };

    const reverseWords = () => {
        // Split the sentence into an array of words
        const words = text.split(' ');

        // Reverse the order of the words in the array
        const reversedWords = words.reverse();

        // Join the words back into a string
        const reversedSentence = reversedWords.join(' ');

        setText(reversedSentence);
    };

    const sortAlphabetically = () => {
        // Split the text into an array of words
        const words = text.split(' ');

        // Sort the words alphabetically
        const sortedWords = words.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

        // Join the sorted words back into a string
        const sortedText = sortedWords.join(' ');

        setText(sortedText);
    };

    return (
        <>
            <div className="container ">
                <div className="mb-3">
                    <h3>Enter Text To Customise</h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Enter Your Text Here' onChange={handleOnChangeText} value={text}></textarea>
                </div>

                <Button buttonName="clear" onClick={clear} />
                <Button buttonName="ToUpperCase" onClick={handleUpperCase} />
                <Button buttonName="ToLowerCase" onClick={handleLowerCase} />
                <Button buttonName="ToCapitilize" onClick={Capitilize} />
                <Button buttonName="Remove Extra Spaces" onClick={removeSpaces} />
                <Button buttonName="ReverseWords" onClick={reverseWords} />
                <Button buttonName="ReverseWords" onClick={sortAlphabetically} />
            </div>
            <div className="container my-4">
                <h3>Your Text Info</h3>
                <p> Number Of Characters : {text.length}</p>
                <p>Number Of Words: {countWords()}</p>
            </div>
        </>
    )
}
