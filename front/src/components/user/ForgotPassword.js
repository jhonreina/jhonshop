import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearError, forgotPassword } from "../../actions/userActions";
import MetaData from "../layout/MetaData";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };

  return (
    <Fragment>
      <MetaData title={"Olvide mi contraseña"} />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Olvide mi contraseña</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email Registrado</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-2"
              disabled={ loading ? true: false} >Recuperar Contraseña</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;