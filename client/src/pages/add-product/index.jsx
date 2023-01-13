// import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/getData";
import { productSchema } from "../../schema";
import "./index.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddProduct = () => {
  const dispatch = useDispatch();
  // const { values, resetForm, errors, touched, handleSubmit, handleChange } =
  //   useFormik({
  //     initialValues: {
  //       name: "",
  //       price: "",
  //       description: "",
  //       imgUrl: "",
  //     },
  //     validationSchema: productSchema,
  //     onSubmit: () => {
  //       dispatch(postData(values));
  //       resetForm();
  //     },
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const onSubmit = (data) => {
    reset();
    dispatch(postData(data));
  };
  return (
    <div id="add-product-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Product</title>
      </Helmet>
      <div className="container">
        {/* <div className="add-product">
          <form onSubmit={handleSubmit}>
            <div className="input-control">
              <p>
                <label htmlFor="name">Name:</label>
              </p>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Name"
              />
              {errors.name && touched.name && (
                <div style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </div>
              )}
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="price">Price:</label>
              </p>
              <input
                id="price"
                name="price"
                type="number"
                onChange={handleChange}
                value={values.price}
                placeholder="Price"
              />
              {errors.price && touched.price && (
                <div style={{ color: "red", fontSize: "13px" }}>
                  {errors.price}
                </div>
              )}
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="description">Description:</label>
              </p>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="2"
                onChange={handleChange}
                value={values.description}
                placeholder="Description"
              ></textarea>
              {errors.description && touched.description && (
                <div style={{ color: "red", fontSize: "13px" }}>
                  {errors.description}
                </div>
              )}
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="imgUrl">Image Url:</label>
              </p>
              <input
                id="imgUrl"
                name="imgUrl"
                type="text"
                onChange={handleChange}
                value={values.imgUrl}
                placeholder="Image Url"
              />
              {errors.imgUrl && touched.imgUrl && (
                <div style={{ color: "red", fontSize: "13px" }}>
                  {errors.imgUrl}
                </div>
              )}
            </div>
            <div className="btn">
            <button type="submit">Submit</button>
            </div>
          </form>
        </div> */}
        <div className="add-product">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-control">
              <p>
                <label htmlFor="name">Name:</label>
              </p>
              <input {...register("name")} placeholder="Name" />
              <div style={{ color: "red", fontSize: "13px" }}>
                {errors.name?.message}
              </div>
            </div>

            <div className="input-control">
              <p>
                <label htmlFor="price">Price:</label>
              </p>
              <input {...register("price")} placeholder="Price" />
              <div style={{ color: "red", fontSize: "13px" }}>
                {errors.price?.message}
              </div>
            </div>

            <div className="input-control">
              <p>
                <label htmlFor="description">Description:</label>
              </p>
              <textarea
                {...register("description")}
                placeholder="Description"
              />
              <div style={{ color: "red", fontSize: "13px" }}>
                {errors.description?.message}
              </div>
            </div>

            <div className="input-control">
              <p>
                <label htmlFor="imgUrl">Image Url:</label>
              </p>
              <input {...register("imgUrl")} placeholder="Image url" />
              <div style={{ color: "red", fontSize: "13px" }}>
                {errors.imgUrl?.message}
              </div>
            </div>
            <div className="btn">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
