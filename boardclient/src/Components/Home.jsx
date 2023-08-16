import { useState } from "react";
import "../StyleSheet/Home.css";
import freecodecampLogo from "../Image/freecodecamp-logo.png";

const Home = () => {
  const [text, setText] = useState(
    "# H1\n" +
      "## H2\n" +
      "`printf('goodbye world!')`\n" +
      "``` \n printf('goodbye world!') \n ``` \n" +
      "[title](https://www.example.com) \n" +
      "1. First item 2. Second item 3. Third item \n " +
      "<span style={{ fontSize: '12px' }}>small text</span>\n" +
      "> blockquote \n" +
      "![alt text](https://www.w3schools.com/images/lamp.jpg)  " +
      " **bold text**  \n" +
      `<img src={gato} alt='Cute Cat' style={{ width: '100px' }} />` // Agrega la imagen de un gato usando la variable "gato"
  );

  const handleChange = (event) => {
    const typing = event.target.value;
    setText(typing);
  };

  const handleChangeRep = () => {};

  return (
    <>
      <div className="container-edit">
        <div className="header-options">
          <>
            <img src={freecodecampLogo} alt="Logo" className="image" />
            <span>Editar</span>
          </>
          <>
            <button>X</button>
          </>
        </div>
        <div>
          <textarea
            name="textArea"
            value={text}
            className="text-edit"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="container-preview">
        <div className="header-options">
          <>
            <img src={freecodecampLogo} alt="" className="image" />
            <span>Previewer</span>
          </>
          <>
            <button>X</button>
          </>
        </div>
        <div>
          <textarea
            name="textRep"
            value={text}
            className="text-preview"
            onChange={handleChangeRep}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Home;
