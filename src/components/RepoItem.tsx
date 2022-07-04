import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const Languages = {
    TypeScript: "#2b7489",
    Vue: "#42b883",
    JavaScript: "#FEDE00",
    CSS: "#0BB2EC"
};

interface RepoProps {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: "Vue" | "JavaScript" | "CSS" | "TypeScript";
}

const RepoItem = ({ name, description, stars, forks, language }: RepoProps) => {
    return (
        <div className="group relative">
        <a href={`https://github.com/Seemo0/${name}`} rel="noreferrer" target="_blank">
            <div className="flex flex-col h-36 p-4  rounded-md border-y-2 border-x-2 border-slate-700 hover:border-purple-400 inset-1 transition-colors duration-75 cursor-pointer">
                <h1 className="font-semibold mb-1">{name}</h1>
                <p className="text-sm text-gray-800/70 dark:text-gray-100/70">{description}</p>
                <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p className="flex flex-row items-center">
                        <motion.div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ background: Languages[language], border: `solid 3px ${Languages[language]}` }}
                        />
                        {language}
                    </p>

                    <p className="flex flex-row items-center justify-center">
                        <AiOutlineStar className="mr-1 w-4 h-4" /> {stars}
                    </p>
                    <p className="flex flex-row items-center justify-center">
                        <BiGitRepoForked className="mr-1 w-4 h-4" /> {forks}
                    </p>
                </div>
            </div>
        </a>
        </div>
    );
};

export default RepoItem;
