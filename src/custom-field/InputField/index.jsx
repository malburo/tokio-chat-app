import { Form } from 'antd';
import Search from 'antd/lib/input/Search';
import React from 'react';
InputField.propTypes = {};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <Form.Item validateStatus={showError ? 'error' : ''}>
      <Search
        {...field}
        id={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}

export default InputField;
