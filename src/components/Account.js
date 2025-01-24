import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/accountSlice";

export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.account.balance);
  return (
    <div>
      <div>Balance:{balance}$</div>
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw</button>
    </div>
  );
};
