import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
      const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = !!localStorage.getItem("auth"); // приводим isAuth к типу boolean
    console.log(isAuth);
    return (
        <Card>
            {" "}
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                {...props}
            ></Component>
        </Card>
    );
};

export default withFunctions;
