import { useContext } from "react";
import { UserContext } from "../../components/providers/UserContextProvider";
import MisdemeanorsEmoji from "./MisdemeanorsEmoji";

const Misdemeanours = () => {
    const data = useContext(UserContext);
    const loading = "Loading...";

    if (!data) {
        return (
            <table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Citizen Id</th>
                        <th>Date</th>
                        <th>Misdemeanour</th>
                        <th>Punishment Idea</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loading}</td>
                        <td>{loading}</td>
                        <td>{loading}</td>
                        <td>{loading}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <table style={{ textAlign: "center" }}>
            <thead>
                <tr>
                    <th>Citizen Id</th>
                    <th>Date</th>
                    <th>Misdemeanour</th>
                    <th>Punishment Idea</th>
                </tr>
            </thead>
            {data?.map(({ citizenId, date, misdemeanour }) => (
                <tbody key={citizenId}>
                    <tr>
                        <td>{citizenId}</td>
                        <td>{date}</td>
                        <td>
                            <MisdemeanorsEmoji message={misdemeanour} />
                        </td>
                        <td>
                            <img src={`https://picsum.photos/80/80?random=${citizenId}`} />
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};

export default Misdemeanours;
