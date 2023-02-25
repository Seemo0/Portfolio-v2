import { useEffect, useState } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState<Date>();
    const [awake, setAwake] = useState<boolean>(true);

    function updateTime() {
        setTime(new Date());
        if (new Date().getHours() < 7) setAwake(false);
    }

    useEffect(() => {
        updateTime();
    }, []);

    return (
        <p className="text-black/50 dark:text-white/50 text-sm mb-10">
            It's currently{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{time && time.toLocaleTimeString()}</span>{" "}
            for me, so I'm probably{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "sleeping"}</span>. I'll
            get back to you soon.
        </p>
    );
};

export default TimeStatus;
