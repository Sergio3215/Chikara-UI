'use client'
import p5 from 'p5';
import { createRef, useEffect } from 'react';

//ref:
//https://codesandbox.io/p/devbox/gatsby-starter-hello-world-vjecy?file=%2Fsrc%2Fcomponents%2Fsketch.js%3A2%2C37

function Sketch({ sketch, style, id, className }) {
    let canvas = null;

    let sketchRef = createRef();

    useEffect(() => {
        try {
            canvas.remove();
            canvas = new p5(sketch, sketchRef.current);
        } catch (error) {
            canvas = new p5(sketch, sketchRef.current);
        }
    }, []);


    return(
        <div ref={sketchRef}
        style={style}
        id={id}
        className={className}
        ></div>
    )
}

module.exports = {
    Sketch,
}
