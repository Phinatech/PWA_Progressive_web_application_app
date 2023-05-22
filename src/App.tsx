import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Here", navigator.geolocation);

    navigator.geolocation.watchPosition((res: any) => {
      console.log("This is watchPosition", res);
    });
  }, []);

  return <div>hello</div>;
}

export default App;
