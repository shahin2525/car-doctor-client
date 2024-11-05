import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

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
  return (
    <div>
      <h1>{bookings.length}</h1>
    </div>
  );
};

export default Bookings;
