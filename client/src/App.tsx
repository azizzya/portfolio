import { Outlet } from "react-router";

function App() {
  console.log(process.env.API_URL)

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
