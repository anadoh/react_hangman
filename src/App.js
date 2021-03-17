import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import "./App.css";
import {showNotification as show, getWordsFromApi} from './helpers/helpers'


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setshowNotification] = useState(false);
  const [words, setWords] = useState(["police", "ananas", "carrot", "bike", "sport", "application"])
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)]);
  
  useEffect(() => {
  getWordsFromApi()
  .then((data) => {
    setWords(data)
    setSelectedWord(words[Math.floor(Math.random() * words.length)])
  })
  .catch((err) => {
    console.log("api-error " + err);
  });
  }, []);
  
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key;
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setshowNotification);
          }
        } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
            } else {
              show(setshowNotification);
            }
          }
        }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    setSelectedWord (words[Math.floor(Math.random() * words.length)])
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure  wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
        selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}  />
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
