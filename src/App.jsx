import React from "react"; // Adicione esta linha
/* import Banner from "./components/Banner"; */
import Header from "./components/Header";
/* import Home from "./pages/Home";*/
import Global from "./styles/Global";
import Footer from "./components/Footer";
import Imobi from "./pages/Imobi";

function App() {
  return (
    <div>
      <Header />
      <Imobi />
      {/*  <Banner />
       <Home /> */}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
