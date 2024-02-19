import { useState } from 'react'
import './App.css'

function App() {
const [hi, setHi] = useState();
const [mi, setMi] = useState();
const [hf, setHf] = useState();
const [mf, setMf] = useState();
const [resultado, setResultado] = useState("Resultado");

  const soma = () =>{
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);

    while (somaMin > 59){
        somaMin -= 60;
        somaHora ++;
        setResultado()
    }
    setResultado(somaHora + ":" + somaMin);
    const sub = () =>{
      let subHora = hi.value*60 + Number(mi.value);
    let subMin =  hf.value*60 + Number(mf.value);
    let resHora = 0;
    let resMin = subMin - subHora;
    if(resMin < 0){
        resMin *= -1;
    }

    while (resMin > 59){
        resMin -= 60;
        resHora ++;
    }
    setResultado = (resHora + ":" + resMin);
    }
  
  }
 return (
    <> 
    <h1>kalkuladora de Horas</h1>
    <div className="samba">
    <h3> Digite os horários que deseja calcular!</h3>
    <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} placeholder="Hora Inicial"/> &nbsp; : &nbsp;    
    <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} placeholder="Minuto Inicial"/><br/><br/>    
    <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} placeholder="Hora Final"/> &nbsp; : &nbsp;   
    <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} placeholder="Minuto Final"/><br/><br/>    
    <button onclick="soma()">Soma</button>
    <button onclick="sub()">Diferença</button>
    <h3 id="resultado">!Resultado Aqui!</h3>
    </div>
    
  </> 
  )
}
export default App
