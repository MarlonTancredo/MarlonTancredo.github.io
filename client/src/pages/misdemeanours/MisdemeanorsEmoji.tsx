type Props = {
    message: string;
};

type Emojis = {
    [value: string]: string;
};

const emojis: Emojis = {
    rudeness: "Mild Public Rudeness 🤪",
    lift: "Speaking in a Lift 🗣",
    vegetables: "Not Eating Your Vegetables 🥗",
    united: "Supporting Manchester United 😈",
};

const MisdemeanorsEmoji = ({ message }: Props) => {
    return <>{emojis[message]}</>;
};

export default MisdemeanorsEmoji;
