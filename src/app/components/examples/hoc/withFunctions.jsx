import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
      const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");
    console.log(isAuth);
    return (
        <Card>
            {" "}
            <Component
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            ></Component>
        </Card>
    );
};

export default withFunctions;
