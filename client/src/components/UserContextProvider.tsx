import { ReactPortal, createContext } from "react";
import useMisdemanours from "../hooks/useMisdemeanours";

type Misdemeanours = {
    citizenId: number | string;
    misdemeanour: string;
    date: string;
};

const UserContext = createContext<Misdemeanours[] | undefined>([]);

const UserContextProvider = ({ children }: ReactPortal) => {
    const data = useMisdemanours("http://localhost:8080/api/misdemeanours/4");

    return (
        <>
            <UserContext.Provider value={data}>{children}</UserContext.Provider>
        </>
    );
};
export { UserContext, UserContextProvider };
