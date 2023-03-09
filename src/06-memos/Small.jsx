//!De la manera de nombrar el memo solo es porque se trabaja con vite
//import { memo } from "react";
//!De la manera de React.memo() es para que no genere conflicto con vite, si se trabaja con CRA, no habria porque importar esto
import  React  from "react";

export const Small = React.memo( ({value}) => {

    console.log('Me volvi a dibujar :(');
    return (
        <small>{ value }</small>
    )
})
