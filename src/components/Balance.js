import { useSelector } from "react-redux"

export const Balance = () =>{
    const balance = useSelector(state =>state.account.balance)
    return (<div style={{color: 'white'}}>Balance: {balance}</div>)
}