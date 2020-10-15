import React from "react";
import { Container } from "@material-ui/core";
import { ApolloProvider } from "@apollo/react-hooks";

import { render, waitForElement } from "@testing-library/react";
import RepositoryList from "./repository.container";
import client from "../../github/github.graphql.client";

describe("<RepositoryList />", () => {
  // Setup
  it(`should render loading state initially and then display a message for an empty default search term, like "There are no such repositories!"`, async () => {
    // Arrange
    const container = render(
      <ApolloProvider client={client}>
        <Container maxWidth={"sm"}>
          <RepositoryList searchTerm={""} />
        </Container>
      </ApolloProvider>
    );

    //act
    const loading = container
      .getByRole("progressbar")
      .classList.contains("MuiCircularProgress-root");

    // Assert
    expect(loading).toBe(true);
    expect(container).toMatchSnapshot();

    //act
    await waitForElement(() =>
      container.getByText("There are no such repositories!")
    );

    // Assert
    expect(
      container.getByText("There are no such repositories!").classList
    ).toContain("MuiTypography-overline");
    expect(container).toMatchSnapshot();
  });

  it("Should query a valid entry", async () => {
    // Arrange
    const container = render(
      <ApolloProvider client={client}>
        <Container maxWidth={"sm"}>
          <RepositoryList searchTerm={"redux"} />
        </Container>
      </ApolloProvider>
    );

    //act
    await waitForElement(() => container.getByTestId("repositories-container"));

    // Assert
    expect(
      container.getByTestId("repositories-container").firstElementChild
        ?.textContent
    ).toMatch("redux");
  });

  it(`should render 20 repositories`, async () => {
    // Arrange
    const container = render(
      <ApolloProvider client={client}>
        <Container maxWidth={"sm"}>
          <RepositoryList searchTerm={"react redux"} />
        </Container>
      </ApolloProvider>
    );

    //act
    await waitForElement(() => container.getByTestId("repositories-container"));

    // Assert
    expect(
      container.getByTestId("repositories-container").children.length
    ).toEqual(20);
  });

  it(`should render repository details, like anchor, stars and fork label`, async () => {
    // Arrange
    const container = render(
      <ApolloProvider client={client}>
        <Container maxWidth={"sm"}>
          <RepositoryList searchTerm={"react redux"} />
        </Container>
      </ApolloProvider>
    );

    //act
    await waitForElement(() => container.getByTestId("repositories-container"));

    // Assert
    expect(
      container
        .getByTestId("repositories-container")
        .firstElementChild?.querySelector("a")?.innerHTML
    ).not.toBeNull(); // it has a link
    expect(
      container
        .getByTestId("repositories-container")
        .firstElementChild?.getElementsByClassName("MuiChip-label").length
    ).toEqual(2); // it has 2 element such as stars and forks
  });
});
