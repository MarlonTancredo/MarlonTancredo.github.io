import { useState } from "react";
import useMisdemeanour from "../../hooks/useMisdemeanour";

const Misdemeanours = () => {
    const data = useMisdemeanour("http://localhost:8080/api/misdemeanours/4");
    const [loading] = useState("Loading...");

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
                        <td>{misdemeanour}</td>
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
