import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHoks = () => {

    const {increment, counter} =useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);
    //console.log({data, isLoading, hasError});
    const {name, air_date} = !!data && data; 
    //console.log(name, air_date);
    
    return (
        <>
            <h1>Breaking Bad quotes</h1>
            <hr />
            {
                (isLoading)?(

                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                ):(

                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ name }</p>
                        <footer className="blockquote-footer">{ air_date }</footer>
                    </blockquote>
                )
            }

            <button 
                onClick={() =>increment(1)} 
                disabled={ isLoading }
                className="btn btn-primary">
                Next quote</button>
        </>
    )
}
