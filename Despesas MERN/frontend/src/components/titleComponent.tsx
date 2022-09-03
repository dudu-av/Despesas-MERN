import React, { useState, useEffect } from "react";
//import styled, { keyframes } from "styled-components";
//import { bounce } from "react-animations";

/*
const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;*/

export default function Title() {
  const [currentEmoji, setCurrentEmoji] = useState("🤑");
  const [emojiSet, setEmojiSet] = useState(["🤑", "🧐", "😌", "🤔"]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEmoji((emoji) => {
        const i = emojiSet.findIndex((elem) => elem === emoji);
        return emojiSet[(i + 1) % emojiSet.length];
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1 id="title">Despesas {currentEmoji}</h1>;
}
