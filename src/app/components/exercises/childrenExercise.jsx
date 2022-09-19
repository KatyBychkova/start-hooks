import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

// const ComponentsList = ({ children }) => {
//     return React.Children.map(children, (child, num) => {
//         return <div>{num + 1} Компонент списка</div>;
//     });
// };

const ComponentsList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    console.log(arrayOfChildren);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};

ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

// const Component = () => {
//     return <div>Компонент списка</div>;
// };

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};
Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
