import { Outlet } from "react-router-dom";

export default function Order() {
  return (
    <div>
      <h2>Order List</h2>
      <Outlet />
    </div>
  );
}
