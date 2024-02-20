import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
const pageNotFound = require('../../assets/page-not-found.jpeg');

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="container-center not-found">
          <h2>Page not found</h2>
          <img src={pageNotFound} alt="not page found" />
          <Link to="/">Go To Home...</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
