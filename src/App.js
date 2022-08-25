/*
----------------------------------------
Title:    App.js
Date:     Aug 23, 2022
Author:   Chassity
----------------------------------------
*/

import { QueryClient, QueryClientProvider } from "react-query";

import CryptoTable from "./component/CryptoTable";
import "./App.css";

const queryClient = new QueryClient();

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

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
