/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ children, ...props }) => (
  <Button {...props} variant="contained" color="primary">
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
