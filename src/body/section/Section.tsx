
const Section = (title: string, path: string) => {
    return (
        <div id={path}>
            <h1>{title}</h1>
        </div>
    )
}

export default Section;