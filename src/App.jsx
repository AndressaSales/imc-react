import { useState } from 'react';
import './App.css';
export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function explicacao(){
    alert("O Índice de Massa Corporal (IMC) é uma medida que ajuda a avaliar se uma pessoa tem um peso saudável em relação à sua altura");
  }

  function calculo(){
    let alt = altura / 100;
    let imc = peso / (alt + alt);

    if(imc < 18.5){
      setMensagem('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2));
    }else if(imc >=18.5 && imc < 24.9){
      setMensagem('Você está saudável! Seu IMC: ' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 30){
      setMensagem('Você está sobrepeso! Seu IMC: ' + imc.toFixed(2));
    }else if(imc > 34.9){
      setMensagem('Cuidado Obesidade! Seu IMC: ' +imc.toFixed(2));
    }
  }

  return(
    <div className='container'>
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu IMC</span>

      <div className="area-input">
        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='Peso em (Kg) Ex: 90' />
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Altura em (Cm) Ex: 180' />

        <button onClick={calculo}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
      <button onClick={explicacao} className='btn'>O Que é IMC?</button>
    </div>
  );
}