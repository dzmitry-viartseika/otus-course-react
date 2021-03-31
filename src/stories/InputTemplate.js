import React from 'react';
import PropTypes from 'prop-types';
import './input.css';
import {action} from "@storybook/addon-actions";

/**
 * Primary UI component for user interaction
 */
export const InputTemplate = ({ customClass, type, value, placeholderText, size, label }) => {
  return (
    <div className={'app-field'}>
      <label className={'app-field__label'} htmlFor={label}>
        { label }
      </label>
      <input
          type={type}
          value={value}
          placeholder={placeholderText}
          className={['app-field__input', `app-field__input_${size}`, customClass].join(' ')}
      />
      <button onClick={action("handleClick")}>click</button>
    </div>
  );
};

InputTemplate.propTypes = {
  /**
   * Is this the custom CSS class for input?
   */
  customClass: PropTypes.string,
  /**
   * Is this the placeholder text in input?
   */
  placeholderText: PropTypes.string,
  /**
   * Is this the type of input?
   */
  type: PropTypes.string.isRequired,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * InputTemplate contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

InputTemplate.defaultProps = {
  type: 'text',
  value: '',
  placeholderText: 'Test placeholder',
  label: 'Label Placeholder',
  size: 'small',
  onChange: undefined,
};
