

export const NameChapter = ({chapter, air_date }) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{ chapter }</p>
            <footer className="blockquote-footer">{ air_date }</footer>
        </blockquote>
    )
}
