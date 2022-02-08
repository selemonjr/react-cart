import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <div className="pageNotFound">
        <h2 className="notFound">Page Not Found</h2>
        <Link to="/"><button className="home">Go Back Home</button></Link>
        </div>
        </>
    )
}
export default NotFound;