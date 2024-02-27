// InputBox.js
import React from "react";
import styles from "./editmodal.module.css";

function InputBox({ field, form: { touched, errors }, label, type }) {
  const isError = touched[field.name] && errors[field.name];

  return (
    <div className={styles.input_container}>
      <div className={styles.form_Box}>
        <div className={styles.label_box}>
          <span className={styles.astrick_mark}>*</span>
          <span className={styles.label_name}>{label}: </span>
        </div>
        <div className={styles.outer_input_box}>
          <span className={styles.input_inner_box}>
            <input
              {...field}
              type={type}
              className={`${styles.input_box} ${isError ? styles.error : ""}`}
            />
            <div className={styles.error_box}>
              {isError && (
                <span className={styles.error_message}>
                  {errors[field.name]}
                </span>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
