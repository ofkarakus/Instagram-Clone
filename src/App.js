import ContextProvider from "./context/Context";
import AppRouter from "./router/Router";

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
