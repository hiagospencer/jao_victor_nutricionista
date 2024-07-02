import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./components/Sobre";
import Saude from "./components/Saude";
import Consulta from "./components/Consulta";
import Carrossel from "./components/Carrossel";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home id="Home" />
      <Sobre id="Sobre" />
      <Saude id="Saúde & Bem-Estar" />
      <Consulta id="Consulta" />
      <Carrossel />
      <Contato id="Contato" />
      <Footer />
    </>
  );
}

export default App;
