import React from "react";
import Joke from "./Joke";
export const steps = [
  {
    id: "0",
    message:
      "Hi, I'm Jaksa's chatbot designed to convince you to work with me.",
    trigger: "20"
  },
  {
    id: "20",
    message:
      "Note that you can always press the mic icon to talk to me :)",
    trigger: "1"
  },
  {
    id: "1",
    message: "What is your name?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Pleased to meet you, {previousValue}!",
    trigger: "4"
  },
  {
    id: "4",
    message:
      "The chatbot that my creator is going to build for you will do financial calculations, but before that I would like to show you what I can do.",
    trigger: "5"
  },
  {
    id: "4",
    message:
      "Lets start with few example options to condition the flow of conversation, answering each will produce different flow.",
    trigger: "5"
  },
  {
    id: "5",
    options: [
      { value: "Option 1", label: "Option 1", trigger: "6" },
      { value: "Option 2", label: "Option 2", trigger: "7" }
    ]
  },
  {
    id: "6",
    message:
      "Nice, you chose Option 1! I could direct you to some action, but I am not programmed to do that now.",
    trigger: "8"
  },
  {
    id: "7",
    message:
      "Option 2 was interesting I agree, but I don't know what to do from now, after all, I'm just an example.",
    trigger: "8"
  },
  {
    id: "8",
    message: "Do you want to choose again?",
    trigger: "9"
  },
  {
    id: "9",
    options: [
      { value: "I'm curious", label: "I'm curious", trigger: "5" },
      { value: "I get the point", label: "I get the point", trigger: "10" }
    ]
  },
  {
    id: "10",
    message: "Ok, let's move on!",
    trigger: "11"
  },
  {
    id: "11",
    message:
      "I could definitely show you some validations I can do, you will need this for every calculation!",
    trigger: "12"
  },
  {
    id: "12",
    message: "Try to enter anything other than numbers.",
    trigger: "13"
  },
  {
    id: "13",
    user: true,
    validator: value => {
      if (isNaN(value)) {
        return `We can't do simple math with ${value}!`;
      }
      return true;
    },
    trigger: "15"
  },
  {
    id: "15",
    message: "Great, want to hear a joke?",
    trigger: "16"
  },
  {
    id: "16",
    component: <Joke />,
    waitAction: true,
    trigger: "17"
  },
  {
    id: "17",
    message:
      "I'm still a chatbot, my jokes may not be funny, but they sure are fetched from external API!",
    trigger: "18"
  },
  {
    id: "18",
    message:
      "I'm still a chatbot, my jokes may not be funny, but they sure are fetched from external API!",
    trigger: "19"
  },
  {
    id: "19",
    message: "I hope I served my purpose, Goodbye!",
    end: true
  }
];
