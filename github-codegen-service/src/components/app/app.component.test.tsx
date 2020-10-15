import React from "react";
import { shallow } from "enzyme";

import App from "./app.component";

describe("<App />", () => {
  it("should display a title", () => {
    // Arrange
    const component = shallow(<App />);

    // Act
    const wrapper = component.find(".makeStyles-title-1").text();

    // Assert
    expect(wrapper).toEqual("GitHub GraphQL API");
  });

  it("should render search component", () => {
    // Arrange
    const component = shallow(<App />);

    // Act
    const wrapper = component.find("Search").text();

    // Assert
    expect(wrapper).toEqual("<Search />");
  });

  it("should render RepositoryList component", () => {
    // Arrange
    const component = shallow(<App />);

    // Act
    const wrapper = component.find("RepositoryList").text();

    // Assert
    expect(wrapper).toEqual("<RepositoryList />");
  });
});
