'use client'
import { useEffect, useState } from "react";
import { NeuralNetwork } from "./brain";

let net = new NeuralNetwork();

net.train([
    //black
    { input: { r: 0, g: 0, b: 0, a: 0 }, output: { color: 0.5 } },
    { input: { r: 0, g: 0, b: 0, a: 1 }, output: { color: 1 } },
    //white
    { input: { r: 1, g: 1, b: 1, a: 0 }, output: { color: 1 } },
    { input: { r: 1, g: 1, b: 1, a: 1 }, output: { color: 0 } },

    //green
    { input: { r: 0, g: 1, b: 0, a: 1 }, output: { color: 0 } },

    //red
    { input: { r: 1, g: 0, b: 0, a: 1 }, output: { color: 1 } },

    //blue
    { input: { r: 0, g: 0, b: 1, a: 1 }, output: { color: 1 } },

    //mixes
    { input: { r: 0.5, g: 0.5, b: 1.0, a: 1 }, output: { color: 0 } },
    { input: { r: 0, g: 0.43, b: 1, a: 1 }, output: { color: 1 } },
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

const getTextColor = (myColor) => {
    let color = ''
    let rgb = myColor
    if (rgb.includes("rgba")) {
        rgb = rgb.replace("rgba(", "").replace(")", "");
    }
    else {
        rgb = rgb.replace("rgb(", "").replace(")", "");
    }
    rgb = rgb.split(",")

    let entrada = {
        r: parseInt(rgb[0]) / 255,
        g: parseInt(rgb[1]) / 255,
        b: parseInt(rgb[2]) / 255,
        a: rgb.includes("rgba") ? parseInt(rgb[3]) : 1
    };

    let resultado = net.run(entrada);


    color = `rgb(${255 * resultado.color}, ${255 * resultado.color}, ${255 * resultado.color})`;


    return color;
}


//Start Components React
const Input = ({ label, onChange, errorMessage, isInvalid, name, type, bgColor, id, className, textAlign, CustomColor, placeHolder }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));

        setWordColor(lbColor);
    }, [bgColor]);

    const Styled = {
        container: {
            borderRadius: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "5px",
            paddingBottom: "10px",
            border: '1px solid transparent',
            backgroundColor: bgColor,
            minWidth: "200px",
            maxWidth: "450px",
            maxHeight: "76px",
            margin: "10px"
        },
        inputStyle: {
            backgroundColor: "transparent",
            border: "0px",
            width: "100%",
            color: (CustomColor == undefined) ? wordColor : CustomColor,
            borderBottom: "1px solid #00000091",
            opacity: 0.5,
            textAlign: textAlign || "left"
        },
        labelStyle: {
            color: (CustomColor == undefined) ? wordColor : CustomColor,
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
                        placeholder={placeHolder}
                        onFocus={(e) => {
                            e.target.style.outline = "none";
                            e.target.style.opacity = "1";
                            e.target.style.borderColor = wordColor;
                        }} onBlur={(e) => {
                            e.target.style.borderColor = '#00000091';
                            e.target.style.opacity = "0.5";
                        }} />
                </div>
            </div>
        </>

    );
}

const Title = ({ text, bgColor, id, className, CustomColor }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    return (
        <>
            <h1 style={{
                color: (CustomColor == undefined) ? wordColor : CustomColor,
            }} id={id} className={className}>
                {text}
            </h1>
        </>
    )
}

const Dropdown = ({ bgColor, children, onChange, name, id, className, borderRadius, CustomColor }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    const Styled = {
        select: {
            color: (CustomColor == undefined) ? wordColor : CustomColor,
            backgroundColor: bgColor,
            padding: "12px",
            borderRadius: borderRadius
        }
    }

    return (
        <>
            <select style={Styled.select} onChange={onChange} name={name}
                id={id} className={className}
                onFocus={(e) => {
                    e.target.style.outline = "none";
                }}>
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

const Button = ({ children, className, id, onPress, onClick, bgColor, CustomColor }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor));
        setWordColor(lbColor);
    }, [bgColor]);

    const Styled = {
        btn: {
            padding: "12px",
            borderRadius: "12px",
            color: (CustomColor == undefined) ? wordColor : CustomColor,
            backgroundColor: bgColor,
            margin: "15px"
        }
    }

    return (
        <>
            <button className={className} id={id} onPress={onPress} onClick={onClick} style={Styled.btn} onMouseOver={(e) => {
                e.target.style.opacity = "0.9";
            }}
                onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                }}>
                {children}
            </button>
        </>
    );
}

const Divider = ({ width }) => {
    return <hr style={{
        width: width || "95%",
        margin: "15px",
    }} />;
}

const Modal = ({ children, isOpen, className, autoScroll }) => {

    const [w, setW] = useState('100%');
    const [h, setH] = useState('100%');

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScroll();
        })

    }, []);


    const setScroll = () => {
        try {
            if (autoScroll) {
                document.querySelector('#modal').style.transform = `translate(0px, ${scrollY}px)`;
            }

            setH(innerHeight);
        } catch (error) {

        }
    }

    useEffect(() => {
        if (isOpen) {
            setScroll();

            window.addEventListener('scroll', () => {
                setScroll();
            })

        }
    }, [isOpen])


    return (
        <>
            {
                isOpen ?
                    <div style={{
                        position: "absolute",
                        backgroundColor: "rgba(5, 5, 5, 0.8)",
                        width: w,
                        height: h,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} id="modal" className={className}>
                        {children}
                    </div>
                    :
                    <></>
            }
        </>
    )
}

const ModalContainer = ({ children, bgColor, onClick, CustomColor }) => {

    const [wordColor, setWordColor] = useState('black');

    useEffect(() => {
        let lbColor = getTextColor(nombreColorARGB(bgColor || "rgb(255, 255, 255)"));
        setWordColor(lbColor);
    }, [bgColor]);

    return (
        <>
            <div style={{
                border: "1px solid" + bgColor || "rgb(255, 255, 255)",
                borderRadius: "10px",
                backgroundColor: bgColor || "rgb(255, 255, 255)",
                color: (CustomColor == undefined) ? wordColor : CustomColor,
                margin: "35px",
                padding: "25px",
                textAlign: "center",
                width: "30%",
            }}>

                <div style={{
                    textAlign: "right",
                    cursor: "pointer",
                    padding: "2px",
                    maxWidth: "40px",
                    position: "relative",
                    left: "82%",
                    top: "-10px"
                }} onClick={onClick}>
                    X
                </div>
                {children}
            </div>
        </>
    )
}

const ModalHeader = ({ children }) => {
    return (
        <div style={{
            margin: "10px",
            marginRight: "0px",
            marginTop: "0px",
        }}>
            <div style={{
                textAlign: "center",
                position: "relative",
                top: "-18px"
            }}>
                {children}
            </div>
        </div>
    )
}

const ModalBody = ({ children }) => {
    return (
        <div style={{
            margin: "20px"
        }}>
            {children}
        </div>
    )
}

const ModalFooter = ({ children }) => {
    return (
        <div style={{
            marginTop: "10px"
        }}>
            {children}
        </div>
    )
}

const Main = ({ children, className, id }) => {

    const Styled = {
        mainStyle: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
        }
    }

    return (
        <main style={Styled.mainStyle} className={className} id={id}>
            {children}
        </main>
    );
}

const Dialog = ({ title, text, type, onClick, icon, lan, isOpen, bgColor, onClose }) => {

    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        setIsOpened(isOpen);
    }, [isOpen])

    const Styled = {
        Container: {
            boder: "1px solid " + bgColor,
            borderRadius: "15px",
            margin: "20px",
            backgroundColor: bgColor,
            padding: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            color: getTextColor(nombreColorARGB(bgColor)),
            position: "absolute",
            zIndex: 999,
        },
        Headers: {
            textAlign: "center",
            fontSize: "26px"
        },
        Body: {
            textAlign: "center",
        },
        Footer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
        }
    }

    return (
        (isOpened) ?
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}>
                <div style={Styled.Container}>
                    <div style={Styled.Headers}>
                        {title}
                    </div>
                    <div style={Styled.Body}>
                        {text}
                    </div>
                    <div style={Styled.Footer}>
                        {
                            (type == "two") ?
                                <>
                                    <Button onClick={() => onClick} bgColor="green">{lan == "es" ? "Si" : "Yes"}</Button>
                                    <Button onClick={() => {
                                        setIsOpened(false);
                                        onClose();
                                    }} bgColor="red">{"No"}</Button>
                                </>
                                :
                                <>
                                    <Button onClick={() => {
                                        setIsOpened(false);
                                        onClose();
                                    }} bgColor="red">{lan == "es" ? "Cerrar" : "Close"}</Button>
                                </>
                        }
                    </div>
                </div>
            </div>
            :
            <></>
    )
}

module.exports = {
    Input,
    Title,
    Dropdown,
    Image,
    Button,
    Divider,
    Modal,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Main,
    Dialog
}