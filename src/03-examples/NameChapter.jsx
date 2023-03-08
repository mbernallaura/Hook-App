import { useLayoutEffect, useRef, useState } from "react"


export const NameChapter = ({chapter, air_date }) => {
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({width:0, height:0})
    useLayoutEffect(() => {
        const {height, width} =pRef.current.getBoundingClientRect();
        //! Ya que es un objeto, se coloca con { }
        setBoxSize({height, width});
    }, [chapter])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display:'flex' }}
            >
                <p ref={ pRef } className="mb-1">{ chapter }</p>
                <footer className="blockquote-footer">{ air_date }</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
