import { IconType } from "react-icons";

interface TechProps {
    text: string;
    icon: IconType;
}

export const TechItem = ({ text, icon }: TechProps) => {
    return (
        <li className="flex p-2 space-x-2 ">  
            <span>{icon({ className: "h-6 w-6" })}</span>
            <span>{text}</span>   
        </li>
    );
};
