import * as dayjs from "dayjs";

import "./scss/_all.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Tasks from "./pages/Tasks";
import NoMatch from "./pages/NoMatch";

dayjs.extend(require("dayjs/plugin/weekday"));
dayjs.locale(require("dayjs/locale/ru"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default App;