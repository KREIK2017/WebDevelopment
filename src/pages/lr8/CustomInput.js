import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../css/CommentForm.css';

const CustomInput = ({ label, ...props }) => (
    <div >
        <label className="form-label" htmlFor={props.name}>{label}</label>
        <Field className="form-input" {...props} />
        <ErrorMessage name={props.name} component="div" className="form-error" />
    </div>
);
export default CustomInput;
