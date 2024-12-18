import PropTypes from 'prop-types';
import "./ButtonLink.css";

export const BtnLink = ({ text = "View Code", img = null, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button className="btn-primary" onClick={handleClick} aria-label={text}>
      {img && <img src={img} alt="" />}
      {text}
    </button>
  );
};

// Define PropTypes to validate props
BtnLink.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string.isRequired
};
