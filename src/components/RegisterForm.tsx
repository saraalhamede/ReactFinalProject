import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { basicSchema } from "./shcema/shcema"
interface RegisterFormProps {

}

const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            imageURL: "",
            imageAlt: "",
            state: "",
            country: "",
            city: "",
            street: "",
            houseNumber: "",
            zip: ""
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {

        },
    });
    return (<>
        <div className="container w-100 m-100">
            <h5 className="display-5 my-2" style={{ textAlign: "center" }}>Register</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Fisrt Name *"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                    {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-danger">{formik.errors.firstName}</p>
                    )}
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        name="middele name"
                        placeholder="Middele Name"
                        value={formik.values.middleName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Middle Name</label>
                    {formik.touched.middleName && formik.errors.middleName && (
                        <p className="text-danger">{formik.errors.middleName}</p>
                    )}
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Last Name *"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                    {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-danger">{formik.errors.lastName}</p>
                    )}
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        name="phinenumber"
                        placeholder="Phone Number *"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">phone</label>
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-danger">{formik.errors.phone}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Email *"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Email</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingInput"
                        placeholder="password *"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">password</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Image Url"
                        name="imageUrl"
                        value={formik.values.imageURL}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Image URL</label>
                    {formik.touched.imageURL && formik.errors.imageURL && (
                        <p className="text-danger">{formik.errors.imageURL}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Image Alt"
                        name="imageUrl"
                        value={formik.values.imageAlt}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Image Alt</label>
                    {formik.touched.imageAlt && formik.errors.imageAlt && (
                        <p className="text-danger">{formik.errors.imageAlt}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="State "
                        name="imageUrl"
                        value={formik.values.imageURL}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">State</label>
                    {formik.touched.state && formik.errors.state && (
                        <p className="text-danger">{formik.errors.state}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Country *"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">country</label>
                    {formik.touched.country && formik.errors.country && (
                        <p className="text-danger">{formik.errors.country}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="City *"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">city</label>
                    {formik.touched.city && formik.errors.city && (
                        <p className="text-danger">{formik.errors.city}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Street *"
                        name="street"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Street</label>
                    {formik.touched.street && formik.errors.street && (
                        <p className="text-danger">{formik.errors.street}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="House number *"
                        name="houseNumber"
                        value={formik.values.houseNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">House Number</label>
                    {formik.touched.houseNumber && formik.errors.houseNumber && (
                        <p className="text-danger">{formik.errors.houseNumber}</p>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Zip"
                        name="zip"
                        value={formik.values.zip}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">zip</label>
                    {formik.touched.zip && formik.errors.zip && (
                        <p className="text-danger">{formik.errors.zip}</p>
                    )}
                </div>
                <div className="form-floating mb-3 w-100">
                    <input type="checkbox" id="isBusiness" name="isBusiness" />
                    <label htmlFor="isBusiness"> isBusiness</label>
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
                <Link to="/Login">You already have Account? Login</Link>
            </p>
        </div>
    </>);
}

export default RegisterForm;