import { ReactNode, createContext } from "react";
import { Misdemeanours } from "../../types/misdemeanors";
import useMisdemanours from "../../hooks/useMisdemeanours";

type Props = {
    children: ReactNode;
};

const UserContext = createContext<Misdemeanours[] | undefined>([]);

const UserContextProvider = ({ children }: Props) => {
    const data = useMisdemanours("http://localhost:8080/api/misdemeanours/4");

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserContext, UserContextProvider };
