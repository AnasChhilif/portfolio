import About from "./about/About"
import Tech from "./tech/Tech"
import Work from "./work/Work"

const Body = () => {
    return (
        <div className="px-10 flex flex-col gap-2 mb-2">
            <About></About>
            <Tech></Tech>
            <Work></Work>
        </div>
    )
}

export default Body