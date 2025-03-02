import GlobalStyle from './GlobalStyles';
import logo from './img/Group.png'
// import { Account } from './components/Account';
// import { LangSwitcher } from './components/LangSwitcher';

function App() {
  return (
    <div>
    <GlobalStyle/>

      <img src={logo} alt="img" />
      {/* <Account/> */}
      {/* <LangSwitcher/> */}
    </div>
  );
}

export default App;
