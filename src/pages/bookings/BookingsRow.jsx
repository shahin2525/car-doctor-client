import PropTypes from "prop-types";
const BookingsRow = ({ booking, handleDelete, confirmBooking }) => {
  const { _id, customerName, price, date, img, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-blue-400">confirm</span>
        ) : (
          <button
            onClick={() => confirmBooking(_id)}
            className="btn btn-ghost btn-xs"
          >
            please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
BookingsRow.propTypes = {
  img: PropTypes.string,
  price: PropTypes.string,

  booking: PropTypes.object,
  customerName: PropTypes.string,
  date: PropTypes.func,
  handleDelete: PropTypes.func,
  confirmBooking: PropTypes.func,
};
