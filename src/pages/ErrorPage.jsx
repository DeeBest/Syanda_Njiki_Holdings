import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <FaExclamationTriangle className="text-6xl text-red-600" />
      <h2 className="text-2xl font-bold">404 Page Not Found!</h2>
      <p className="text-lg">
        Go back{' '}
        <Link className="italic font-semibold text-sky-600" to="/">
          Home
        </Link>
        .
      </p>
    </section>
  );
};
export default ErrorPage;
