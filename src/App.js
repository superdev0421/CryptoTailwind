/*
----------------------------------------
Title:    App.js
Date:     Aug 22, 2022
Author:   Edward Liu
----------------------------------------
*/

import { QueryClient, QueryClientProvider } from "react-query";

import CryptoTable from "./component/CryptoTable";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CryptoTable />
      </div>
    </QueryClientProvider>
  );
}
export default App;
