import { Navigate, Route, Routes } from "react-router";
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';



export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1> 
            <hr />
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="login" element={ <LoginPage/> }/>
                <Route path="about" element={ <AboutPage/> }/>

                {/*Formas para redirigir la pagina cuando no se escriba el path correcto */}
                {/* 1. En esta forma, te lleva a la pagina que indiaste pero el path no cambia 
                es decir, si pongo /hhhahaa, me redirecciona a la pag que indique pero el path queda con lo que le coloque */}
                {/* <Route path="*" element={ <LoginPage/> }/> */}

                {/* 2. Aca se puede redirigir a la pagina pero cambia el path por a pagina que se eleigio,
                es decir, si pongo /hhhahaa, el path se cambiara por el que se le indico en este caso quedaria /about */}
                <Route path="*" element={ <Navigate to={"/about"}/> }/>
            </Routes>
        </>
    )
}
