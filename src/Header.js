import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={styles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}
export default Header;

Header.defaultProps = {
  text: "Feedback ui",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
Header.prototype = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
