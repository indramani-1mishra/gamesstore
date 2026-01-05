// import React from "react";
import Icon from "@/components/icon/Icon";
import PropTypes from "prop-types";
const Toggle = ({ className, click, icon }) => {
  return (
    <a
      href="#toggle"
      className={className ? className : ""}
      onClick={(ev) => {
        ev.preventDefault();
        click(ev);
      }}
    >
      <Icon name={icon} />
    </a>
  );
};
Toggle.propTypes = {
  className: PropTypes.string,
  click: PropTypes.func,
  icon: PropTypes.string,
}
export default Toggle;
