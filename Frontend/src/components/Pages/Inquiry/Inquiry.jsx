import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inquiry.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "../Home/Header/TopHeader";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import BottomFooter from "../Home/Footer/BottomFooter";

const Inquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // To reset the form after submission
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
    // Show success toast
    toast.success("Inquiry submitted successfully!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    // Reset the form after submission
    reset();
  };

  return (
    <>
      <TopHeader />
      <Header />
      
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Inquiry Banner Section */}
      <section className="inquiry-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="inquiry-background">
                <h1 className="inquiry-heading">Inquiry</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centering the Form */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="inquiry-container">
          <h2 className="text-center">Inquiry Form</h2>
          <p className="text-center">
            Fill out the form below, and a representative will respond to your request.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="inquiry-form p-4">
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
                <input
                  {...register("firstName", { required: "First Name is required" })}
                  className="form-control"
                  placeholder="Enter Your First Name"
                />
                {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input
                  {...register("lastName", { required: "Last Name is required" })}
                  className="form-control"
                  placeholder="Enter Your Last Name"
                />
                {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label>Email Address</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="col-md-6">
                <label>Phone No</label>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone No is required" })}
                  className="form-control"
                  placeholder="Enter Your Phone No"
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label>Company</label>
                <input
                  {...register("company", { required: "Company is required" })}
                  className="form-control"
                  placeholder="Enter Your Company Name"
                />
                {errors.company && <p className="text-danger">{errors.company.message}</p>}
              </div>
              <div className="col-md-6">
                <label>Website</label>
                <input
                  {...register("website")}
                  className="form-control"
                  placeholder="Enter Your Website Name"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label>Country</label>
                <input
                  {...register("country", { required: "Country is required" })}
                  className="form-control"
                  placeholder="Enter Your Country"
                />
                {errors.country && <p className="text-danger">{errors.country.message}</p>}
              </div>
              <div className="col-md-6">
                <label>State</label>
                <input
                  {...register("state", { required: "State is required" })}
                  className="form-control"
                  placeholder="Enter Your State"
                />
                {errors.state && <p className="text-danger">{errors.state.message}</p>}
              </div>
            </div>

            <div className="mt-3">
              <label>File</label>
              <input type="file" className="form-control" />
            </div>

            <div className="mt-3">
              <label>Message:</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="form-control"
                placeholder="Enter Your Message"
                rows="4"
              ></textarea>
              {errors.message && <p className="text-danger">{errors.message.message}</p>}
            </div>

            <div className="text-left mt-4">
              <button type="submit" className="btn btn-success inquiry">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      <BottomFooter />
    </>
  );
};

export default Inquiry;
