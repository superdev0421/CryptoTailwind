import { shallow } from "enzyme";

import Pagination from "./Pagination";

test("renders pagination", () => {
  const currentPage = 3;
  const totalPage = 5;

  const component = shallow(
    <Pagination currentPage={currentPage} totalPage={totalPage} />
  );

  const nextButton = component.find(`button[children="Next"]`);
  expect(nextButton).toHaveLength(1);
  const prevButton = component.find(`button[children="Previous"]`);
  expect(prevButton).toHaveLength(1);
  const items = component.find(".item");
  expect(items).toHaveLength(totalPage);
  const selectItem = component.find(".text-blue-600");
  expect(selectItem).toHaveLength(1);
});
