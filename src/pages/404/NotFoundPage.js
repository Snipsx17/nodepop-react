import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="container-center not-found">
          <h2>Page not found</h2>
          <img src="page-not-found.jpeg" alt="Not-found-page" />
          <Link to="/">Go To Home...</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
