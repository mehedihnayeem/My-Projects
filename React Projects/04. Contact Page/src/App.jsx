import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TextContent from "./components/Text Content/TextContent";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <TextContent />
      <Form />
      <Footer />
    </>
  );
}

export default App;
