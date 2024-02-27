
  // EditModal.js
  import React from "react";
  import Modal from "@mui/material/Modal";
  import { Box } from "@mui/material";
  import styles from "./editmodal.module.css";
  import CloseIcon from "@mui/icons-material/Close";
  import InputBox from "./InputBox";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs: "90%",sm: "80%", md: "60%", lg: "32%"},
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    outline: "none",
    p: 0,
    borderRadius: "4px",
  };
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
  });
  
  function EditModal({ open, handleClose, userData }) {
    console.log("userData==>", userData)
    const initialValues = {
        name: userData ? userData.name : "",
        email: userData ? userData.email : "",
        phone: userData ? userData.phone : "",
        website: userData ? userData.website : "",
      };
  
    const handleSubmit = (values, { setSubmitting }) => {
      console.log("Form submitted:", values);
      setSubmitting(false);
      handleClose();
    };
  
    return (
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* {userData} */}
          <div>
            <div className={styles.heading_box}>
              <div>
                <h5 className={styles.heading}>Basic Modal</h5>
              </div>
              <div className={styles.icon_box}>
                <CloseIcon className={styles.close_icon} onClick={handleClose} />
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({  isSubmitting }) => (
                <Form>
                  <div className={styles.content_box}>
                    <Field
                      name="name"
                      type="text"
                      label="Name"
                      component={InputBox}
                    />
                    <Field
                      name="email"
                      type="email"
                      label="Email"
                      component={InputBox}
                    />
                    <Field
                      name="phone"
                      type="tel"
                      label="Phone"
                      component={InputBox}
                    />
                    <Field
                      name="website"
                      type="url"
                      label="Website"
                      component={InputBox}
                    />
                  </div>
                  <div className={styles.button_box}>
                    <div className={styles.buttons_inner_box}>
                      <button
                        type="button"
                        className={styles.close_button}
                        onClick={handleClose}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className={styles.save_button}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    );
  }
  
  export default EditModal;
  