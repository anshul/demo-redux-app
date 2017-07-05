/* eslint-disable  jsx-a11y/href-no-hash */
import React from 'react';
import PropTypes from 'prop-types';

const FooterLink = ({ active, children, onClick }) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

FooterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FooterLink;
