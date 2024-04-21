import {Link, Outlet} from "react-router-dom";


function Root() {
    return (
        <div>
            <h1>React Router</h1>
            <p>
                <Link to="/">Link Home</Link> -
                <Link to="/contacts/1">Link Contact Children</Link>
            </p>
                <Outlet/>
        </div>
    );
}

export default Root;