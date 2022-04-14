import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LevelMarkdown from "../components/level-markdown/level-markdown";
import contentHTMLMock from "../static-data/content-html.mock";

describe("LevelMarkdown", () => {
  it("Should render the markdown heading and paragraph", () => {
    render(
      <LevelMarkdown contentHTML={contentHTMLMock} title="Hello Casper" />
    );
    expect(
      screen.getByRole("heading", { name: "Hello Casper" })
    ).toBeInTheDocument();
    expect(screen.getByText(/paragraph with a bold word/i)).toBeInTheDocument();
  });

  it("Should render the scrollbar on hover", async () => {
    render(
      <LevelMarkdown contentHTML={contentHTMLMock} title="Hello Casper" />
    );
    const article = document.querySelector("article") as HTMLElement;
    const scrollbar = document.querySelector(
      "article > div > div:nth-child(3) > div"
    );
    await userEvent.hover(article);
    expect(scrollbar).toHaveStyle("opacity: 1;");
    await userEvent.unhover(article);
    expect(scrollbar).toHaveStyle("opacity: 0;");
  });
});
