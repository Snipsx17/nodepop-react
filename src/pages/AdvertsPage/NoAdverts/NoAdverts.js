import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const NoAdverts = ({ children }) => {
  return (
    <div className="no-ads">
      <span>{children}</span>
      <Button as={Link} $variant="primary" to="new" relative="route">
        Create advert
      </Button>
    </div>
  );
};

export default NoAdverts;
