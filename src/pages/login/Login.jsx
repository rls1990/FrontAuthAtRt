/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const { isAuthenticated, signin, errors } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated]);

  useEffect(() => {
    if (errors.length > 0) {
      console.log(errors);
      reset();
    }
  }, [errors]);

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(/b8ed0822-8bf8-4a08-8940-d63dc3b3f086.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#595959",
        }}
      >
        <div
          className="container"
          style={{
            width: 460,
            backdropFilter: "blur(7px)",
            padding: 20,
            borderStyle: "solid",
            borderColor: "#80808047",
            borderWidth: 1,
          }}
        >
          <h2 className="center">Login</h2>

          {errors.length > 0 &&
            errors.map((message, index) => (
              <div key={index}>
                <p className="red-text text-darken-3">{message}</p>
              </div>
            ))}

          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  id="nombre"
                  className="validate"
                  {...register("nombre", { required: true })}
                />
                <label htmlFor="nombre" className="black-text text-lighten-4">
                  Nombre
                </label>
              </div>
              <div className="input-field col s12">
                <input
                  type="password"
                  id="password"
                  className="validate"
                  {...register("password", { required: true })}
                />
                <label htmlFor="password" className="black-text text-lighten-4">
                  Password
                </label>
              </div>
              <div className="col s12">
                <button
                  className="btn-large waves-effect waves-light"
                  style={{ width: "100%" }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
