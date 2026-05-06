"use client";

import ContactLink from "../../components/talk/ContactLink";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import TimeStatus from "../../components/talk/TimeStatus";

export default function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Let's chat 💬</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
                Have an inquiry, or want to connect? Feel free to leave a message below, or get in touch via Discord,
                Twitter, or email.
            </p>

            <TimeStatus />

            <div className="grid ml-30 grid-cols-1 md:grid-cols-3 md:gap-4 mb-20 ">
                <div className="row-start-1 md:row-auto">
                    <ContactLink
                        name="email"
                        icon={<FiMail className="w-6 h-6 text-gray-400" />}
                        link="mailto:mohamedouallal02@gmail.com"
                        borderColor="hover:border-gray-400/50"
                    />
                </div>
            </div>
        </motion.div>
    );
}
