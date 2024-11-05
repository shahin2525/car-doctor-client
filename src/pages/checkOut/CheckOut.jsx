import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const bookingInfo = {
      customerName: name,
      date,
      email,
      price: amount,
      service: _id,
    };

    console.log(bookingInfo);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>services:{title}</h1>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              // placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              // placeholder="email"

              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              // placeholder="amount"
              defaultValue={"$" + price}
              name="amount"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/*  */}
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block "
            // className="btn btn-block"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
