import React from "react";
import { shallow } from "enzyme";
import RepositoryComponent from "./repository.components";

describe("<Repository />", () => {
  // Arrange
  const mockRepo = {
    id: "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==",
    name: "react",
    url: "https://github.com/duxianwei520/react",
    stargazers: {
      totalCount: 3885,
    },
    forks: {
      totalCount: 1394,
    },
  } as any;

  const component = shallow(
    <RepositoryComponent repo={mockRepo} key={mockRepo.id} />
  );

  it("should disply the repository title", () => {
    // Act
    const wrapper = component.text();

    // Assert
    expect(wrapper).toEqual("react");
  });

  it("should display a number of stars for a repository", () => {
    // Assert
    const wrapper = component.find("[label]").first();

    // Assert
    expect(wrapper.props().label).toEqual(3885);
  });

  it("should display a number of forks for a repository", () => {
    // Assert
    const wrapper = component.find("[label]").last();

    // Assert
    expect(wrapper.props().label).toEqual(1394);
  });

  it("Should render repository link", () => {
    // Assert
    const wrapper = component.find("[href]").last();

    // Assert
    expect(wrapper.props().href).not.toBeNull();
  });
});
