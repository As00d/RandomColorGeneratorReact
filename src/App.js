import { useState } from "react";
import "./index.css";
const buttonStyle = {
  padding: "20px",
};
function App() {
  return <Color />;
}
export default App;

function Color() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("");
  function generateRandomHEXColor() {
    const arr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += arr[Math.floor(Math.random() * arr.length + 0)];
    }
    setColor(color);
  }
  function generateRandomRGBColor() {
    let color = `rgb(${Math.floor(Math.random() * 255 + 0)}, ${Math.floor(
      Math.random() * 255 + 0
    )}, ${Math.floor(Math.random() * 255 + 0)})`;
    setColor(color);
  }

  return (
    <div
      className="wrapper"
      style={
        color
          ? { backgroundColor: color }
          : {
              backgroundColor: color,
            }
      }
    >
      <div>
        <button style={buttonStyle} onClick={() => setColorType("HEX")}>
          Create HEX color
        </button>
        <button style={buttonStyle} onClick={() => setColorType("RGB")}>
          Create RGB color
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            colorType === "HEX"
              ? generateRandomHEXColor()
              : generateRandomRGBColor()
          }
        >
          Generate Random color
        </button>
      </div>
      <h2
        style={{
          fontSize: "64px",
        }}
      >
        {colorType} COLOR
      </h2>
      <h1
        style={{
          fontSize: "90px",
        }}
      >
        {colorType === "HEX" ? `${color}` : `${color}`}
      </h1>
    </div>
  );
}
