import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `http://localhost:5000/bookings?${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  const handleDelete = (id) => {
    const proceed = confirm("are you proceed");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("data has deleted");
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(remainingBookings);
          }
        });
    }
  };
  const confirmBooking = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remainingData = bookings.filter(
            (booking) => booking._id !== id
          );
          const updatedData = bookings.find((booking) => booking._id === id);
          updatedData.status = "confirm";
          const newData = [updatedData, ...remainingData];
          setBookings(newData);
        }
      });
  };
  return (
    <div>
      <h1>{bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>service</th>
              <th>Date</th>
              <th>price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                booking={booking}
                key={booking._id}
                handleDelete={handleDelete}
                confirmBooking={confirmBooking}
              ></BookingsRow>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
