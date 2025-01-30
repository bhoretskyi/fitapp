import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../redux/accountSlice";
import { useState } from "react";
import { Balance } from "./Balance";

export const Account = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <Balance />
      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(e.target.value === "" ? "" : Number(e.target.value))
        }
      />
      <button onClick={() => value && dispatch(deposit(Number(value)))}>
        Deposit
      </button>
      <button onClick={() => value && dispatch(withdraw(Number(value)))}>
        Withdraw
      </button>
    </div>
  );
};
