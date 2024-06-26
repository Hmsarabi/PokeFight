import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Cards from './components/Cards';
import FightPreview from "./components/FightPreview";
import ResultsTable from "./components/ResultTable";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/pokedex" element={<Cards />} />
        <Route path="/fight" element={<FightPreview />} />
        <Route path="/fightResults" element={<ResultsTable />} /> {/* Add this route */}
        <Route path="/pokemon/:id/:info" />
      </Route>
    </Routes>
  );
}

export default App;
