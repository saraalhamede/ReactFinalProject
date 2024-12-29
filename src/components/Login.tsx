import { FunctionComponent } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const navigate: NavigateFunction = useNavigate();
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        }),
        onSubmit: (values) => {

        },
    });
    return (
        <div className="container w-100 m-100">
            <h5 className="display-5 my-2" style={{ textAlign: "center" }}>LOGIN</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )}
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                    )}
                </div>
                <div className="mt-2 w-100 " >
                    <button style={{ width: "49%", marginRight: "2px", color: "red", background: "white", borderColor: "red" }} >CANCEL</button>
                    <button style={{ width: " 50%", color: "blue", background: "white", borderColor: "blue" }} >EDIT</button>
                </div>
                <button
                    className="btn btn-primary mt-3 w-100"
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid}
                >
                    SUBMIT
                </button>
            </form>
            <p className="mt-3" style={{ textAlign: "center" }}>
                <Link to="/register">New user? Register now</Link>
            </p>
        </div>);
}

export default Login;