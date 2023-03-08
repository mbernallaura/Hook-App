import { useCounter, useFetch } from "../hooks";
import { NameChapter, LoadingChaper } from "../03-examples";


export const Layout = () => {

    const {increment, counter} =useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);
    //console.log({data, isLoading, hasError});
    const {name, air_date} = !!data && data; 
    //console.log(name, air_date);
    
    return (
        <>
            <h1>Rick and Morty chapters</h1>
            <hr />
            {
                (isLoading)
                ?<LoadingChaper/>
                :<NameChapter chapter={ name } air_date={ air_date }/>
            }

            <button 
                onClick={() =>increment(1)} 
                disabled={ isLoading }
                className="btn btn-primary">
                Next chapter</button>
        </>
    )
}
