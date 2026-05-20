import loaderIcon from '../assets/refresh.svg';

function Loader() {
  return (
    <div className="loader-container">
      <img src={loaderIcon} alt="loading" />
      <div className="loader-icon"></div>
      <p>loading</p>

    </div>
  );
}

export default Loader;