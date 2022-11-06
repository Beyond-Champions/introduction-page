import React, { useState } from "react";
import * as math from "mathjs";
import "./StylesFinanciamento.css";

const arrOperacoes = ["*", "/", "+", ".", "-"];

export default function Financiamento() {
  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  }

  function insereOperacao(val) {
    if (
      input === "" ||
      (arrOperacoes.includes(input[input.length - 1]) &&
        arrOperacoes.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function calcular() {
    if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="Financiamento">
      <div className="input-financiamento">
        <input
          type="number"
          placeholder="Valor do empréstimo ou financiamento"
        />
      </div>
      <div className="input-financiamento">
        <input type="number" placeholder="Nº de parcelas" />
      </div>
      <div className="input-financiamento">
        <input type="number" placeholder="taxa de juros (%)" />
      </div>
    </div>
  );
}
