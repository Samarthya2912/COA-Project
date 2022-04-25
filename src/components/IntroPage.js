import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./IntroPage.css";

const IntroPage = ({ setIntroVisibility }) => {
  const [text, setText] = useState("");
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setText("Code. ");
    }, 500);
    setTimeout(() => {
      setText("Code. Compile. ");
    }, 1000);
    setTimeout(() => {
      setText("Code. Compile. Debug. ");
    }, 1500);
    setTimeout(() => {
      setText("Code. Compile. Debug. Simulate.");
    }, 2000);
    setTimeout(() => {
      setBtn(true);
    }, 2500);
  }, []);

  return (
    <>
      <div className="container">
          <div>{text || "Hi!"}</div>
          {btn && <Button sx={{ backgroundColor: "teal", color: "white", marginTop: "50px" }} onClick={() => setIntroVisibility(false)}>Get Started!</Button>}
      </div>
    </>
  );
};

export default IntroPage;
