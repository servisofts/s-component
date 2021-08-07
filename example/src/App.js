import React from 'react';
import { SComponentContainer } from 'servisofts-component';
import Pages from './Pages';
const App = () => {
  return (
    <SComponentContainer
      debug
      theme={{
        initialTheme: "dark",
        themes: {
          default: {
            barStyle: "dark-content",
            barColor: "#ffffff",
            primary: "#ffffff",
            secondary: "#000000",
            background: "#dddddd"
          },
          dark: {
            barStyle: "light-content",
            barColor: "#000000",
            primary: "#000000",
            secondary: "#ffffff",
            background: "#222222"
          }
        }
      }}>
      <Pages />
    </SComponentContainer>
  );
};

export default App;
