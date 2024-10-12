import About from "./about/About"
import Tech from "./tech/Tech"

const Body = () => {
    return (
        <div className="px-10 flex flex-col gap-2">
            <About></About>
            <Tech></Tech>
        </div>
    )
}

export default Body