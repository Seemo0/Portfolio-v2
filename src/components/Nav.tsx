import { AnimatePresence, motion } from "framer-motion";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
import { classNames } from "../util/classNames";
import { ReactElement, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const LandingButton = ({ name, link, selected }: { name: string; link: string; selected: boolean }) => {
    return (
        <Link
            href={link}
            className={classNames(
                selected
                    ? "bg-black/10 dark:bg-[#c8c8dc]/10"
                    : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
                "cursor-pointer px-4 py-2 text-sm rounded-md text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-75"
            )}
        >
            {name}
        </Link>
    );
};

const MobileLandingButton = ({
    name,
    link,
    selected,
    onClick,
}: {
    name: string;
    link: string;
    selected: boolean;
    onClick: () => void;
}) => {
    return (
        <Link
            href={link}
            className={classNames(
                selected
                    ? "bg-black/10 dark:bg-[#c8c8dc]/10"
                    : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
                "cursor-pointer px-4 py-2 text-sm rounded-md text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-75"
            )}
            onClick={onClick}
        >
            {name}
        </Link>
    );
};

const LinkButton = ({ icon, href }: { icon: ReactElement; href: string }) => {
    return (
        <a target="_blank" rel="noreferrer" href={href}>
            {icon}
        </a>
    );
};

const Nav = () => {
    const router = useRouter();

    const [mobileMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(old => !old);
    };

    return (
        <>
            <motion.div className="hidden z-[999] fixed w-[90%] md:w-[50rem] xs:flex flex-row justify-between items-center px-4 py-2 mt-4 md:mt-6 rounded-md bg-white/60 dark:bg-[#00c0e3]/20 border border-slate-500/40 backdrop-blur-lg">
                <div className="flex flex-row items-center justify-between gap-2">
                    <ThemeToggle />
                    <LandingButton name="Home" link="/" selected={router.pathname === "/"} />
                    <LandingButton name="Contact" link="/contact" selected={router.pathname === "/contact"} />
                </div>

                <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
                    <LinkButton
                        href={"https://github.com/Seemo0"}
                        icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        href={"https://twitter.com/semo_ou7"}
                        icon={<SiTwitter className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        href={"https://linkedin.com/in/mohamedouallal"}
                        icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                    />
                    <LinkButton
                        href={"mailto:mohamedouallal08@gmail.com"}
                        icon={<FiMail className="w-6 h-6 cursor-pointer" />}
                    />
                </div>
            </motion.div>

            <motion.div className="xs:hidden z-[990] fixed w-full flex flex-row justify-between items-center px-4 py-3 bg-white/60 dark:bg-[#12181d]/60 border-b border-slate-800/50 backdrop-blur-lg">
                <div className="flex flex-row items-center justify-between gap-2">
                    <ThemeToggle />
                </div>

                <div className="flex flex-row items-center justify-center">
                    <button onClick={toggleMenu} className="h-9 w-9 flex items-center justify-center">
                        {!mobileMenuOpen ? <HiMenu className="w-7 h-7" /> : <HiX className="w-7 h-7" />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence exitBeforeEnter>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            key="NavBackdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="z-[500] fixed w-full h-screen overflow-hidden backdrop-blur-md bg-black/10 flex flex-col items-center justify-content"
                        />

                        <motion.div
                            key="NavMenu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="flex flex-col items-center justify-start mt-16 fixed w-full h-auto z-[700] bg-white dark:bg-[#090c0f] border-x border-b border-slate-800/30"
                        >
                            <div className="flex flex-row w-full justify-evenly">
                                <MobileLandingButton
                                    name="Home"
                                    link="/"
                                    selected={router.pathname === "/"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Contact"
                                    link="/contact"
                                    selected={router.pathname === "/contact"}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            <div className="flex flex-row items-center justify-center gap-6 py-4">
                                <LinkButton
                                    href={"https://github.com/Seemo0"}
                                    icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://twitter.com/semo_ou7"}
                                    icon={<SiTwitter className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://linkedin.com/in/mohamedouallal"}
                                    icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"mailto:mohamedouallal08@gmail.com"}
                                    icon={<FiMail className="w-6 h-6 cursor-pointer" />}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
