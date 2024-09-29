import "./App.css";
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  TextField,
  Card,
} from "@mui/material";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});
function App() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState([]);
  const MyButton = styled.button`
    background-color: red;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    height: 30px;
    padding: 5px;
    width: max-content;
  `;

  const cardStyle = css`
    opacity: 0.6;
    color: white;
  `;

  const inputStyle = css`
    padding: 5px;
    width: max-content;
    background-color: lila;
  `;

  const containerStyle = css`
    display: flex;
    align-items: center;
  `;
  function handelButton() {
    setShowText([...showText, text]);
    setText("");
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div css={containerStyle}>
        <TextField
          label="Enter text"
          css={inputStyle}
          variant="outlined"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Text from the field"
        />
        <MyButton onClick={handelButton}>Display Text</MyButton>
      </div>
      {showText.length === 0 ? (
        <Card variant="outlined" css={cardStyle}>
          Text from the field
        </Card>
      ) : (
        showText.map((text) => {
          return (
            <Card variant="outlined" css={cardStyle}>
              {text}
            </Card>
          );
        })
      )}
    </ThemeProvider>
  );
}

export default App;
