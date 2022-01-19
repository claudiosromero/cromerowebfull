import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

const NavLink = ({ children, to, activeClassName, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <link
                className={`${className} ${match ? activeClassName : null}`}
                to={to}
                {...props}
            >
                {children}
            </link>
        </div>
    );
}

export default NavLink;