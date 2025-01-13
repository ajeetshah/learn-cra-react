import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Bar from "./stackoverflow/Bar";
import FinalForm from "./stackoverflow/FinalForm";
import { TanStackQueryDemo } from "./tanstackQuery/TanstackQueryDemo";
import { UserCreation } from "./stackoverflow/UserCreation";
import { IFrame } from "./stackoverflow/IFrame";
import Foo from "./stackoverflow/Foo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/final-form" element={<FinalForm />} />
        <Route path="/tanstack-query" element={<TanStackQueryDemo />} />
        <Route path="/user-creation" element={<UserCreation />} />
        <Route path="/iframe" element={<IFrame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
