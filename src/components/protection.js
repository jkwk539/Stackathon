import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context.js/Auth";

const Protection = ({children}) => {
    const {user} = UserAuth()

    if(!user){
        return <Navigate to='/' />
    }

    return children
}

export default Protection