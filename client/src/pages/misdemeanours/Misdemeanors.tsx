import useMisdemeanour from "../../hooks/useMisdemeanour";

const Misdemeanours = () => {
    const [data] = useMisdemeanour("http://localhost:8080/api/misdemeanours/5");

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>citizenId</th>
                        <th>date</th>
                        <th>misdemeanour</th>
                    </tr>
                </thead>
                {data?.map(({ citizenId, date, misdemeanour }) => (
                    <tbody key={citizenId}>
                        <tr>
                            <td>{citizenId}</td>
                            <td>{date}</td>
                            <td>{misdemeanour}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    );
};

export default Misdemeanours;
