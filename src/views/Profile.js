import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";

function Profile() {
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        console.log(auth);
    });
    return <div>`${auth}`</div>;
}

export default Profile;
