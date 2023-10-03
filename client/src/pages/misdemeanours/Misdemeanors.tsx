import useMisdemeanour from "../../hooks/useMisdemeanour";

const Misdemeanours = () => {
    const [data] = useMisdemeanour("http://localhost:8080/api/misdemeanours/1");
    //console.log(data);

    return (
        <>
            {data?.map((element: unknown) => {
                console.log(element);
            })}
        </>
    );
};

export default Misdemeanours;
