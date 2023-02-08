import PropTypes from "prop-types";

export const Footer = ({ text = "" }) => {
  return <footer className="todo-footer">{text}</footer>;
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
