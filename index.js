'use client'
import { useEffect, useState } from "react";
import { NeuralNetwork } from "../brain"
var net = new NeuralNetwork();

net.train([
  { input: { r: 0, g: 0, b: 0 }, output: { color: 1 } },
  { input: { r: 1, g: 1, b: 1 }, output: { color: 0 } },
  { input: { r: 0, g: 1, b: 0 }, output: { color: 0 } },
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { color: 0 } },
  { input: { r: 0, g: 0.43, b: 1 }, output: { color: 1 } },
  { input: { r: 1, g: 0, b: 0 }, output: { color: 1 } }
]);

var output = net.run([{ r: 1, g: 0, b: 0 }]);  // [0.987]


// console.log(output);


const nombreColorARGB = (nombreColor) => {
  try {
    var temporalDiv = document.createElement("div");
    temporalDiv.style.color = nombreColor;
    document.body.appendChild(temporalDiv);
    var colorRGB = window.getComputedStyle(temporalDiv).color;
    document.body.removeChild(temporalDiv);
    return colorRGB;
  } catch (error) {
    console.log(error);
    return 'rgb(150,20,0)';
  }
}

function getTextColor(myColor) {
  let color = ''
  let rgb = myColor //nombreColorARGB(myColor)
  rgb = rgb.replace("rgb(", "").replace(")", "");
  rgb = rgb.split(",")
  let entrada = {
    r: parseInt(rgb[0]) / 255,
    g: parseInt(rgb[1]) / 255,
    b: parseInt(rgb[2]) / 255,
  };

  //Obtener la prediccion de la red
  let resultado = net.run(entrada);
  //console.log(resultado);

  if (resultado.color > 0.5) {
    color = "white";
  } else {
    color = "black";
  }

  console.log(color);

  return color;
}

console.log(getTextColor("rgb(123,44,22)"));



// console.log(getTextColor(nombreColorARGB("green")));

// Uso
// console.log(nombreColorARGB("red"));

const Input = ({ label, onChange, errorMessage, isInvalid, name, type, bgColor, value }) => {

    const [wordColor, setWordColor] = useState('black')

    useEffect(()=>{
        let lbColor = getTextColor(nombreColorARGB(bgColor));

        setWordColor(lbColor);
    },[bgColor])

    const Styled = {
        container: {
            borderRadius: "20px",
            paddingLeft: "12px",
            paddingTop: "15px",
            paddingBottom: "15px",
            border: '1px solid transparent',
            backgroundColor: bgColor,
        },
        inputStyle: {
            backgroundColor: "transparent",
            border: "0px",
            width: "100%",
            color: wordColor
        },
        labelStyle:{
            color: wordColor,
        },
        errorMsg: {
            marginLeft: "15px"
        }
    }

    return (
        <>
            <div
                style={Styled.container}
            >
                <div>
                    <label style={Styled.labelStyle}>
                        {label}
                    </label>
                </div>
                <div>
                    <input type={type} onChange={onChange} style={Styled.inputStyle} name={name} />
                </div>
            </div>
        </>

    );
}

module.exports = {
    Input
}