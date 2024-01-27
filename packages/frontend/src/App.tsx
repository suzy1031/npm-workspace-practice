import React from "react";
import { z } from "zod";
import logo from "./logo.svg";
import "./App.css";
import { User } from "@monorepo-project/common"; // 共通モジュールのインポート

function App() {
  type User = z.infer<typeof User>; // 共通モジュールから型情報を取得

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
