import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";

function Profile() {
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        console.log(auth);
    });
    return (
        <div>
            <h1>User Email: {auth.email}</h1>
            <h1>User Password: {auth.password}</h1>
            <h1>User Token: {auth.accessToken}</h1>
        </div>
    );
}

export default Profile;
