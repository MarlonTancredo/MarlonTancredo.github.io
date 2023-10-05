import { useEffect, useState } from "react";

type Misdemeanours = {
    citizenId: number | string;
    misdemeanour: string;
    date: string;
};

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
