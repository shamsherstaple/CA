import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'


function UserRoute({ component: Component, rest }) {
    const { token,uerType } = useSelector(state => state?.userProfile?.userData)
    return < Route
        {...rest}
        render={() => {
            return token && uerType==='user' ? <Component /> : <Redirect to="/" />;
        }}
    />
}


export default UserRoute;