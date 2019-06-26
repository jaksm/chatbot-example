import React, { Component } from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import { steps } from "./steps";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#2fa28a",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#2fa28a",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

class App extends Component {
  state = {
    showBot: true,
    data: null
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              recognitionEnable={true}
              speechSynthesis={{ enable: true, lang: "en" }}
            />
          </ThemeProvider>
        </header>
      </div>
    );
  }
}

export default App;
