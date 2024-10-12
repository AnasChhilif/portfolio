import Project from "./project/Project";

const Work = () => {
    return (
        <div id="work" className="border-2 rounded p-2">
            <h1 className="text-2xl font-bold">Work</h1>
            <div className="flex flex-wrap justify-between gap-1">
                <Project title="Budgeteer" description="An expense splitting mobile app for roommates with shared expenses." />
                <Project title="DsEasy" description="An automatic exam generator webapp written in golang." />
                <Project title="MusicMan" description="A lightweight music player with vim-like bindings written in rust." />
                <Project title="Instascraper" description="An instagram bot that posts memes scraped from reddit." />
            </div>
        </div>
    )
}

export default Work;