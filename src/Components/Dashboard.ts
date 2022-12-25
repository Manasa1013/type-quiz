import { useState } from "react";

export const Dashboard = () => {
    let displayText: string = `Hi User, Your score is : 0`;
    const [dashboard] = useState(displayText);
    return (
        { dashboard }
    );
};