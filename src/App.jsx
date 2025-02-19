import { Dashboard } from "./layouts/dashboard/dashboard";
import "./App.css";
import { useAppContext } from "./providers/app-provider";
function App() {
  const { user } = useAppContext();

  return <Dashboard />;
}

export default App;
