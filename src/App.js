// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { Button, NextUIProvider } from "@nextui-org/react";
import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <h1 className="text-7xl font-bold underline">Hello world!</h1>
        <Button color="primary">Button</Button>
      </div>
    </NextUIProvider>
  );
}

export default App;
