import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'pablito',
        email: 'pablito@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    //!Cuando el arreglo esta vacio, es porque se quiere que el useEffect se
    //!dispare una sola vez
    useEffect(()=>{
        //console.log('useeffect');
    },[]);

    useEffect(()=>{
        //console.log('formState change');
    },[formState]);

    useEffect(()=>{
        //console.log('email change');
    },[email]);

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-3"
                placeholder="pablito@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'pablito2') && <Message/>
            }
            
        </>
    )
}
