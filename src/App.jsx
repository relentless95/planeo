import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { CssBaseline, Grid } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CssBaseline>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </CssBaseline>
  );
}

export default App;
