// import React from "react";
// import { Helmet } from "react-helmet";

// const Head = ({ ...props }) => {
//   return (
//     <Helmet>
//       <title>{props.title ? props.title + " | " : null} The Gameio </title>
//     </Helmet>
//   );
// };
// export default Head;
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | ` : ""}The Gameio</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
