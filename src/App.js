import { useState } from "react";
import data from "./components/data";

function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(value);
    if (value <= 1) {
      amount = 1;
    }
    if (value >= data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };
  return (
    <>
      <h1>Tired of boring lorem ipsum</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="paragraph" className="para-text">
          Paragraph:{" "}
        </label>
        <input
          type="number"
          name="paragraph"
          id="paragraph"
          className="input"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="para-container">
        {text.map((item, index) => {
          return (
            <article key={index}>
              <p className="text">{item}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;
