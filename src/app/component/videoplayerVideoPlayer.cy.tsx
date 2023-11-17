import React from "react";
import VideoPlayer from "./videoplayer";

describe("<VideoPlayer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VideoPlayer vdoSrc="/getvaccine.mp4" isplaying={false} />);

    // Assert that the video element is present
    cy.get("video").should("exist");
  });
});
