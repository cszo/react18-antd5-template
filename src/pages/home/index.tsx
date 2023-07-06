import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/order/list">订单</Link>
      <br />
      <Link to="/product/phone">手机</Link>
      <br />
      <Link to="/product/scp/gold">黄金</Link>
    </div>
  );
}
