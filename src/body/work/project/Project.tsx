import React from 'react';

type ProjectProps = {
    title: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ title, description }) => {
    return (
        <div className="border-2 rounded-lg w-2/5 min-w-0">
            <div className="border-b-2 rounded-none bg-gray-200 p-2 text-center flex flex-wrap">
                <h1 className="text-xl font-bold min-w-0 ">{title}</h1>
            </div>
            <div className="m-5 flex flex-wrap">
                <h1 className='min-w-0'>{description}</h1>
            </div>
        </div>
    )
}

export default Project;
