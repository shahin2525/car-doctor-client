import PropTypes from "prop-types";
const BookingsRow = ({ booking }) => {
  const { customerName, price, date, img } = booking;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
        <button className="btn btn-ghost btn-xs">details</button>
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
  date: PropTypes.date,
};
