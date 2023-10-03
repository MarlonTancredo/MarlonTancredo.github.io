import { useEffect, useState } from "react";

type Misdemeanours = {
    citizenId: number;
    misdemeanour: string;
    date: string;
};

const useMisdemeanour = (url: string) => {
    const [data, setData] = useState<Misdemeanours[]>();

    useEffect(() => {
        const fetchMisdemeanour = async () => {
            const response = await fetch(url);
            const misdemeanoursData = await response.json();

            setData(misdemeanoursData.misdemeanours);
        };
        fetchMisdemeanour();
    }, [url]);

    return [data];
};

export default useMisdemeanour;
