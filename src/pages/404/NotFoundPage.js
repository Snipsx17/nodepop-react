import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="container-center not-found">
      <h2>Page not found</h2>
      <img src="page-not-found.jpeg" alt="Not-found-page" />
      <Link to="/">Go To Home...</Link>
    </div>
  );
};

export default NotFoundPage;
