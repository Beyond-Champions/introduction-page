import "./App.css";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BsPiggyBank } from "react-icons/bs";
import santander from "./assets/image.png";
import vancouver from "./assets/vancouver.png";
import londres from "./assets/londres.png";
import sidney from "./assets/sidney.png";
import styled from "styled-components";
import Calculadora from "./components/Calculadora/Calculadora";
import Financiamento from "./components/Financiamento/Financiamento";

function App() {
  const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  return (
    <div className="container">
      <header className="banner">
        <div className="container-santander">
          <a href="#" className="logo">
            <svg
              class="logo-icon desktop-only"
              viewBox="0 0 815.6 142.9"
              tabindex="0"
            >
              <path
                fill="#fff"
                d="M107.6,65.4c-0.2-5.2-1.7-10.3-4.3-14.9L79.8,9.9c-1.8-3.1-3-6.4-3.7-9.9l-1,1.7c-5.8,10.1-5.8,22.5,0,32.6l18.8,32.6c5.8,10.1,5.8,22.5,0,32.6l-1,1.7c-0.7-3.5-1.9-6.8-3.7-9.8L72,61.5l-11-19c-1.8-3.1-3-6.4-3.7-9.8l-1,1.7c-5.8,10-5.8,22.4-0.1,32.5l0,0l18.9,32.6c5.8,10.1,5.8,22.5,0,32.6l-1,1.7c-0.7-3.5-2-6.8-3.7-9.8L46.9,83.2c-3.1-5.4-4.6-11.5-4.3-17.7C17.4,72,0,86,0,102.2c0,22.5,33.6,40.7,75.1,40.7s75.1-18.2,75.1-40.7C150.2,86,132.8,72,107.6,65.4zM178.5,135c0.2-4.9,1.1-9.7,2.7-14.2c8.1,3.6,16.9,5.4,25.8,5.5c13.1,0,20.4-4.2,20.4-12.6s-5.4-12-18.6-17.8l-7.2-3.1c-13.3-5.8-22.3-13.3-22.3-28.2c0-16.1,11.1-26.4,34-26.4c8.8-0.1,17.5,1.3,25.8,4.1c-0.3,4.8-1.3,9.5-2.8,14.1c-7.4-2.6-15.2-4-23.1-4.1c-12.3,0-17.9,4.8-17.9,12.3s5.5,11.6,15.4,15.8l7.6,3.2c17.9,7.6,25.4,15.7,25.4,29.4c0,16.2-12.3,27.4-36.2,27.4C195.9,140.4,186.4,138.7,178.5,135z M319.5,67.6v70.5h-14.2l-0.8-8.5c-4,6.2-10,10.1-19.9,10.1c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.4-38.9C303,63.6,311.3,64.7,319.5,67.6z M303.9,122V77.7c-3.7-0.6-7.4-0.9-11.1-0.8c-16.1,0-23.5,9.9-23.5,25.7c0,14.4,5.8,24.5,19.6,24.5C294.3,127.1,299.6,125.3,303.9,122z M398.9,90.7v47.4h-15.5V93.4c0-11.1-3.7-16.5-19.2-16.5c-4.1,0.1-8.2,0.4-12.3,1.1v60.1h-15.5V67.6c9.9-2.4,20.7-3.9,28.2-3.9C390.5,63.6,398.9,73.6,398.9,90.7z M441.9,126.5c4.1,0,8.2-0.7,12.1-2.1c-0.4,4.2-1,9-1.8,13.1c-4.2,1.6-8.6,2.3-13.1,2.2c-15.1,0-24.7-6.9-24.7-24.1v-74c5-1.5,10.3-2.3,15.5-2.3V66h24.5c-0.2,4.4-0.7,8.9-1.4,13.3h-23.1v34.6C429.9,123,434.4,126.5,441.9,126.5L441.9,126.5z M525.1,67.5V138h-14.2l-0.9-8.5c-4,6.2-10,10.1-19.9,10.1c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.4-38.9C508.6,63.6,516.9,64.7,525.1,67.5L525.1,67.5z M509.6,122V77.7c-3.7-0.6-7.4-0.9-11.1-0.8c-16.1,0-23.6,9.9-23.6,25.7c0,14.4,5.8,24.5,19.6,24.5C500,127.1,505.3,125.3,509.6,122z M604.5,90.7v47.4H589V93.4c0-11.1-3.7-16.5-19.2-16.5c-4.1,0.1-8.2,0.4-12.2,1.1v60.1H542V67.6c9.9-2.4,20.7-3.9,28.2-3.9C596.2,63.6,604.5,73.6,604.5,90.7z M683.2,39.3v98.7H669l-0.8-9c-4,6.6-10,10.7-20.2,10.7c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.3-38.9c3.9,0,7.8,0.4,11.6,1.1V41.5C672.7,39.8,678.2,39.3,683.2,39.3L683.2,39.3z M667.9,121.7V78.3c-4.1-0.9-8.2-1.4-12.4-1.4c-15.4,0-22.7,9.6-22.7,25.7c0,14.4,5.8,24.5,19.6,24.5C658,127.1,663.5,125.2,667.9,121.7L667.9,121.7z M761.3,107.9h-49.5c2,12.6,9.3,18.6,23.1,18.6c8.6,0,17-1.8,24.8-5.4c-0.6,4.1-1.4,9.5-2.4,14.1c-7.1,3.2-14.5,4.5-22.8,4.5c-26,0-38.5-14.4-38.5-38.5c0-21,9.7-37.7,34.4-37.7c22.1,0,31.7,14.5,31.7,32.3C762.1,99.9,761.8,103.9,761.3,107.9L761.3,107.9zM711.5,94.9h35c0-11.6-6.2-18.3-16.9-18.3C718.5,76.6,712.7,82.9,711.5,94.9L711.5,94.9z M815.6,64.2c0,4.5-0.4,8.9-1.4,13.3c-3.9-0.4-7.8-0.6-11.7-0.6c-3.8,0-7.6,0.3-11.4,0.8v60.4h-15.5V67.6c6.6-2.2,17.8-3.9,26.5-3.9C806.5,63.6,811.1,63.8,815.6,64.2L815.6,64.2z"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <section className="sec-titulo">
        <img src={santander} />
        <div className="div-apresentacao">
          <span className="apresentacao">
            Um novo estilo de vida universitária, seja bem vindo à nova criação,
            onde seus curso valem pontos e seu sonho de intercâmbio é garantido!
          </span>
        </div>
        <div className="div-game">
          <div className="div-game2">
            <BsFillDiamondFill color="#cc0000" />
            <h2 className="game">Gameficação</h2>
          </div>
          <div className="div-desc-game">
            <span className="apresentacao">
              Um jeito de diferente de conquistar suas viagens e eventos através
              de pontos, por meio de seu esforço, quanto mais cursos você fizer
              de relevância, mais interassado entedemos que você está sobre essa
              conquista, então sendo assim, seu esforço vale pontos para
              completar sua viagem ou até mesmo algum evento conveniado!
              Insista, persista e troque seus pontos...
            </span>
          </div>
          <div className="div-cards">
            <div className="card-becas">
              <a
                href="https://www.becas-santander.com/pt_br/index.html"
                target="_blank"
              >
                {" "}
                <FaUniversity size={24} color="#000" />
              </a>
              <p className="texto">Acesse os cursos para ganhar pontos!</p>
            </div>
            <div className="card-becas">
              <a href="#viagem">
                {" "}
                <GiAirplaneDeparture size={24} color="#000" />
              </a>
              <p className="texto">Saiba mais sobre programas de viagem!</p>
            </div>
            <div className="card-becas">
              <a href="https://www.santander.com.br/" target="_blank">
                {" "}
                <BsPiggyBank size={24} color="#000" />
              </a>
              <p className="texto">
                Abra já sua conta e aproveite milhares de oportunidades!
              </p>
            </div>
          </div>
        </div>

        <div className="div-viagem">
          <div className="div-viagem2">
            <BsFillDiamondFill color="#cc0000" />
            <h2 className="game">Viagens e Eventos</h2>
          </div>
          <div className="div-desc-game">
            <span className="apresentacao">
              Explore o que há de melhor, tenha acesso facilitado aos principais
              intercâmbios e eventos que podem revolucionar sua carreira, conte
              com a Universia Viagens para seu financiamento facilitado, só
              depende de você e do seu esforço!
            </span>
          </div>
        </div>
        <div className="div-viagens" id="viagem">
          <div className="div-viagens2">
            <img src={vancouver} style={{ height: 200, width: 200 }} />
            <Button style={{ marginLeft: "13%" }}>Saiba Mais</Button>
          </div>
          <div className="div-viagens2">
            <img src={londres} style={{ height: 200, width: 200 }} />
            <Button style={{ marginLeft: "13%" }}>Saiba Mais</Button>
          </div>
          <div className="div-viagens2">
            <img src={sidney} style={{ height: 200, width: 200 }} />
            <Button style={{ marginLeft: "13%" }}>Saiba Mais</Button>
          </div>
        </div>

        <div className="div-viagem">
          <div className="div-viagem2">
            <BsFillDiamondFill color="#cc0000" />
            <h2 className="game">Financiamento</h2>
          </div>
          <div className="div-desc-game">
            <span className="apresentacao">
              Com o nosso financiamento facilitado para estudantes ou pessoas
              físicas que buscam estudar no exterior, em outro estado ou ir a
              eventos, e não possui condições financeiras, nós fornecemos o
              financiamento com análise de crédito e pago em parcelas
              combinadas. Embarque nessa com a gente!
            </span>
          </div>
        </div>

        <div className="div-financiamento">
          <div className="div-financiamento2">
            <BsFillDiamondFill color="#cc0000" />
            <h2 className="game">Simule Seu Financiamento</h2>
          </div>
          <div className="div-financiamento-calc">
            <Financiamento />
            <Calculadora />
          </div>
        </div>
      </section>
      <section></section>

      <footer className="foot">
        <p>&copy; Beyond Champions, Todos os direitos são reservados</p>
      </footer>
    </div>
  );
}

export default App;
