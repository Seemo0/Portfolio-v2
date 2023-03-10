import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiNextdotjs as SiNextJs,
  SiNodedotjs as SiNodeJs,
  SiExpress,
  SiReact,
  SiMysql,
  SiVuedotjs,
  SiTailwindcss as SiTailwindCSS,
  SiTypescript,
  SiYarn,
  SiNpm,
  SiFlutter,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Semo 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a self-taught software engineer from Morocco. I'm currently pursuing full-stack web
                development to create stunning user experiences on the front-end, and scalable and secure infrastructure
                on the backend.
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything technology; from designing and developing software, to understanding how
                the many moving parts of the internet work together, to cybersecurity, systems, programming, and so much
                more. I strive to learn more about these things every day, and utilize my knowledge to further
                understand <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="grid grid-cols-3  sm:grid-cols-4 rounded-md border-slate-800 hover:border-sky-400  border-x-2 border-y-2 p-2 font-light  mb-6">
                    <TechItem icon={SiTypescript} text="TypeScript" />
                    <TechItem icon={SiVisualstudiocode} text="VSCode" />
                    <TechItem icon={SiReact} text="React.js" />
                    <TechItem icon={SiNodeJs} text="Node.js" />
                    <TechItem icon={SiJavascript} text="JavaScript" />
                    <TechItem icon={SiYarn} text="Yarn" />
                    <TechItem icon={SiNextJs} text="Next.js" />
                    <TechItem icon={SiTailwindCSS} text="TailwindCSS" />
                    <TechItem icon={SiVuedotjs} text="Vue.js" />
                    <TechItem icon={SiMongodb} text="MongoDB" />
                    <TechItem icon={SiMysql} text="Mysql" />
                    <TechItem icon={SiExpress} text="Express.js" />
                    <TechItem icon={SiGit} text="Git" />
                    <TechItem icon={SiNpm} text="Npm" />
                    <TechItem icon={SiGithub} text="Github" />
                    <TechItem icon={SiFlutter} text="Flutter" />
                    <TechItem icon={SiBootstrap} text="Bootstrap" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/Seemo0"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
                earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
                GitHub. Below
                are some of my most popular repositories.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};


export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/Seemo0`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/Seemo0/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
