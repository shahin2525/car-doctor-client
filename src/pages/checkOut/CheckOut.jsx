import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;

  return (
    <div>
      <h1>services:{title}</h1>

      <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
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
