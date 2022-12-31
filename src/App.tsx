import Main from "./pages/main";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  );
}

export default App;
