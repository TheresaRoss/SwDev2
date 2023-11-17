import PromoteCard from "@/app/component/promotecard";
import VideoPlayer from "@/app/component/videoplayer";

describe("Scenario.cy.tsx", () => {
  it("playground", () => {
    cy.visit("/");

    cy.get("video").should("exist");
    cy.get("video").should("not.have.prop", "paused", true);

    cy.wait(500);

    cy.get("#clicktopause").click();

    cy.get("video").should("exist");

    cy.get("video").should("have.prop", "paused", true);
  });
});
