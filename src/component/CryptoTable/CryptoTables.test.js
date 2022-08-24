import { shallow } from "enzyme";

import CryptoTable from "./CryptoTable";

test("renders title", () => {
  const mockData = [
    { name: "A", symbol: "A", priceUsd: "100", marketCapUsd: "500" },
    { name: "G", symbol: "G", priceUsd: "700", marketCapUsd: "3500" },
    { name: "C", symbol: "C", priceUsd: "300", marketCapUsd: "1500" },
    { name: "F", symbol: "F", priceUsd: "600", marketCapUsd: "3000" },
    { name: "E", symbol: "E", priceUsd: "500", marketCapUsd: "2500" },
    { name: "D", symbol: "D", priceUsd: "400", marketCapUsd: "2000" },
    { name: "B", symbol: "B", priceUsd: "200", marketCapUsd: "1000" },
  ];

  const component = shallow(
    <CryptoTable data={mockData} currentPage={2} pageSize={3} />
  );
  const title = component.find("caption").text();
  expect(title).toMatch("CryptoCoins");
  const titleContent = component.find("caption p").text();
  expect(titleContent).toContain("Browse a list of CryptoCoins");
});

test("renders table header", () => {
  const mockData = [
    { name: "A", symbol: "A", priceUsd: "100", marketCapUsd: "500" },
    { name: "G", symbol: "G", priceUsd: "700", marketCapUsd: "3500" },
    { name: "C", symbol: "C", priceUsd: "300", marketCapUsd: "1500" },
    { name: "F", symbol: "F", priceUsd: "600", marketCapUsd: "3000" },
    { name: "E", symbol: "E", priceUsd: "500", marketCapUsd: "2500" },
    { name: "D", symbol: "D", priceUsd: "400", marketCapUsd: "2000" },
    { name: "B", symbol: "B", priceUsd: "200", marketCapUsd: "1000" },
  ];

  const component = shallow(
    <CryptoTable data={mockData} currentPage={2} pageSize={3} />
  );

  expect(component.find("thead tr th").getElements()).toHaveLength(4);
});

test("renders table content", () => {
  const mockData = [
    { name: "A", symbol: "A", priceUsd: "100", marketCapUsd: "500" },
    { name: "G", symbol: "G", priceUsd: "700", marketCapUsd: "3500" },
    { name: "C", symbol: "C", priceUsd: "300", marketCapUsd: "1500" },
    { name: "F", symbol: "F", priceUsd: "600", marketCapUsd: "3000" },
    { name: "E", symbol: "E", priceUsd: "500", marketCapUsd: "2500" },
    { name: "D", symbol: "D", priceUsd: "400", marketCapUsd: "2000" },
    { name: "B", symbol: "B", priceUsd: "200", marketCapUsd: "1000" },
  ];

  const component = shallow(
    <CryptoTable data={mockData} currentPage={2} pageSize={3} />
  );

  expect(component.find("tbody tr").getElements()).toHaveLength(3);
});
