function nombreColorARGB(nombreColor) {
    var temporalDiv = document.createElement("div");
    temporalDiv.style.color = nombreColor;
    document.body.appendChild(temporalDiv);
    var colorRGB = window.getComputedStyle(temporalDiv).color;
    document.body.removeChild(temporalDiv);
    return colorRGB;
}

// Uso
// console.log(nombreColorARGB("red"));

const Input = ({ label, onChange, errorMessage, isInvalid, name, type, bgColor, lbColor, inputColor }) => {

    const Styled = {
        container: {
            borderRadius: "20px",
            paddingLeft: "12px",
            paddingTop: "15px",
            paddingBottom: "15px",
            border: '1px solid transparent',
            backgroundColor: bgColor,
            color: lbColor,
        },
        inputStyle: {
            backgroundColor: "transparent",
            border: "0px",
            width: "100%",
            color: inputColor
        },
        errorMsg: {
            marginLeft: "15px"
        }
    }

    return (
        <>
            {
                (isInvalid) ?
                    (errorMessage != "") ?
                        <>
                            <div style={Styled.container} data-slot="input-wrapper" className={"bg-danger-50 hover:bg-danger-50 focus:bg-danger-50"}>
                                <div>
                                    <label className="text-danger">{label}</label>
                                </div>
                                <div>
                                    <input type={type} onChange={onChange} name={name} style={Styled.inputStyle} className="text-danger" />
                                </div>
                            </div>
                            <div className="text-tiny text-danger" style={Styled.errorMsg}>{errorMessage}</div>
                        </>
                        :
                        <div style={Styled.container} data-slot="input-wrapper" className={"bg-default-100 hover:bg-default-200 focus:bg-default-200"}>
                            <div>
                                <label className="text-foreground-500">{label}</label>
                            </div>
                            <div>
                                <input type={type} onChange={onChange} name={name} style={Styled.inputStyle} className="text-foreground-500" />
                            </div>
                        </div>
                    :
                    <div style={Styled.container} data-slot="input-wrapper" className={"bg-default-100 hover:bg-default-200 focus:bg-default-200"}>
                        <div>
                            <label className="text-foreground-500">{label}</label>
                        </div>
                        <div>
                            <input type={type} onChange={onChange} name={name} style={Styled.inputStyle} className="text-foreground-500" />
                        </div>
                    </div>
            }
        </>

    );
}

module.exports = {
    Input
}