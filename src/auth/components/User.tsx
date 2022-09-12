import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../interfaces";
import { useAppContext } from "../AppProvider";

type IParams = {
    id: string;
};

const User = (): JSX.Element => {
    const { id } = useParams<IParams>();
    const { users } = useAppContext();
    const [currentUser, setCurrentUser] = useState<IUser>();

    useEffect(() => {
        if (users) {
            // The plus sign before the id converts it to a number, it's a shortcut.
            setCurrentUser(users.find((user) => user.id === +id!));
        }
    }, [id, users]);

    return (
        <>
            <h1>This is the page for a single user!</h1>
            {currentUser ? (
                <h3>
                    {currentUser.name} | {currentUser.email}
                </h3>
            ) : (
                <p>No User with the given id exists</p>
            )}
        </>
    );
};

export default User;
