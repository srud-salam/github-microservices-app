import React, { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { shallow } from "enzyme";
import Search from "./search.component";

describe("<Search />", () => {
  // Arrange
  const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const wrapper = shallow(
      <Search value={searchTerm} onChange={setSearchTerm} />
    );
    return { searchTerm, setSearchTerm, wrapper };
  };

  it("should start with an exmpty search box", () => {
    //Act
    const { result } = renderHook(() => useSearch());

    //Assert
    expect(result.current.wrapper.text()).toEqual("");
  });

  it("should triggers a new search event when a user typed", () => {
    //Act
    const { result } = renderHook(() => useSearch());
    act(() => result.current.setSearchTerm("React"));

    //Assert
    expect(result.current.searchTerm).toEqual("React");
  });
});
