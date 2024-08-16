import "./App.css";

import React, { useContext } from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeArea, ThemeContext } from "./ThemeContext";

const family = [
  {
    name: "Finn the Human",
  },
  {
    name: "Jake the Dog",
  },
];

const friends = [
  {
    name: "Marceline",
  },
  {
    name: "Princess Bubblegum",
  },
];

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <h1>Contacts</h1>
      <ThemeSwitcher />
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
}

export default App;
