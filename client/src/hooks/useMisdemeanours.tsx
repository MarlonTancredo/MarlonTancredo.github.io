import { useEffect, useState } from "react";
import { Misdemeanours } from "../types/misdemeanors";

const useMisdemanours = (url: string) => {
    const [data, setData] = useState<Misdemeanours[]>();

    useEffect(() => {
        const fetchMisdemeanour = async () => {
            if (!url) {
                return;
            }
            const response = await fetch(url);
            const misdemeanoursData = await response.json();

            setData(misdemeanoursData.misdemeanours);
        };
        fetchMisdemeanour();
    }, [url]);

    return data;
};
export default useMisdemanours;
