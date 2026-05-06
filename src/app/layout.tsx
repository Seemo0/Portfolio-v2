import type { ReactNode } from "react";
import "../globals.css";
import "react-tippy/dist/tippy.css";
import AppShell from "../components/AppShell";

export const metadata = {
    title: "Mohamed Ou",
    description: "Seemo - Software Engineer",
    icons: {
        icon: "/vercel.svg",
    },
    keywords: ["Seemo", "web developer", "github", "typescript"],
    authors: [{ name: "Seemo" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
}
