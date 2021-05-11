import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchImages } from "./redux/actions/imageActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
