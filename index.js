'use client'
import { useEffect, useState } from "react";
import { NeuralNetwork } from "./brain"
let net = new NeuralNetwork();

net.train([
    { input: { r: 0, g: 0, b: 0 }, output: { color: 1 } },
    { input: { r: 1, g: 1, b: 1 }, output: { color: 0 } },
    { input: { r: 0, g: 1, b: 0 }, output: { color: 0 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { color: 0 } },
    { input: { r: 0, g: 0.43, b: 1 }, output: { color: 1 } },
    { input: { r: 1, g: 0, b: 0 }, output: { color: 1 } },
    { input: { r: 0, g: 0, b: 1 }, output: { color: 1 } }
]);

// var output = net.run([{ r: 1, g: 0, b: 0 }]);  // [0.987]

const nombreColorARGB = (nombreColor) => {
    try {
        let temporalDiv = document.createElement("div");
        temporalDiv.style.color = nombreColor;
        document.body.appendChild(temporalDiv);
        let colorRGB = window.getComputedStyle(temporalDiv).color;
        document.body.removeChild(temporalDiv);
        return colorRGB;
    } catch (error) {
        // console.log(error);
        return 'rgb(150,20,0)';
    }
}

function getTextColor(myColor) {
    let color = ''
    let rgb = myColor
    rgb = rgb.replace("rgb(", "").replace(")", "");
    rgb = rgb.split(",")
    let entrada = {
        r: parseInt(rgb[0]) / 255,
        g: parseInt(rgb[1]) / 255,
        b: parseInt(rgb[2]) / 255,
    };

    let resultado = net.run(entrada);

    if (resultado.color > 0.5) {
        color = "white";
    } else {
        color = "black";
    }

    return color;
}

const Input = ({ label, onChange, errorMessage, isInvalid, name, type, bgColor, id, className }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));

        setWordColor(lbColor);
    }, [bgColor]);

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
            color: wordColor,
            borderBottom: "1px solid #00000091",
            opacity: 0.5
        },
        labelStyle: {
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
                    <input type={type} onChange={onChange} style={Styled.inputStyle} name={name} id={id} className={className}
                        onFocus={(e) => {
                            e.target.style.outline = "none";
                            e.target.style.opacity = "1";
                            e.target.style.borderColor = wordColor
                        }} onBlur={(e) => {
                            e.target.style.borderColor = '#00000091';
                            e.target.style.opacity = "0.5";
                        }} />
                </div>
            </div>
        </>

    );
}

const Title = ({ text, bgColor, id, className }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    return (
        <>
            <h1 style={{
                color: wordColor
            }} id={id} className={className}>
                {text}
            </h1>
        </>
    )
}

const Dropdown = ({ bgColor, children, onChange, key, name, id, className }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    const Styled = {
        select: {
            color: wordColor,
            backgroundColor: bgColor,
            padding: "12px",
            borderRadius: "20px"
        }
    }

    return (
        <>
            <select style={Styled.select} onChange={onChange} key={key} name={name}
                id={id} className={className}>
                {children}
            </select>
        </>
    )
}

const Image = ({ src, alt, id, className, label }) => {

    return (
        <div>
            <div>
                <label>{label}</label>
            </div>
            <div>
                <img src={src} alt={alt} id={id} className={className} />
            </div>
        </div>
    )
}

const Button = ({ children, className, id, onPress, onClick, bgColor }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    const Styled = {
        btn: {
            padding: "12px",
            borderRadius: "10px",
            color: wordColor,
            backgroundColor: bgColor,
        }
    }

    return (
        <>
            <button className={className} id={id} onPress={onPress} onClick={onClick} style={Styled.btn}>
                {children}
            </button>
        </>
    );
}

module.exports = {
    Input,
    Title,
    Dropdown,
    Image,
    Button
}