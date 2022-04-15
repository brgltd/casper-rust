import getLevelProps from "../services/get-level-props";
import getLevelPropsMock from "../static-data/get-level-props.mock";

describe("getLevelProps", () => {
  it("Should generate the html from the markdown content", async () => {
    // This test is important to check if updates on remark, remark-html and remark-prism
    // don't break the generated html (missing tags, classes, etc).
    const result = await getLevelProps({ id: "test" });
    expect(result?.contentHTML.slice(0, -1)).toEqual(
      getLevelPropsMock.slice(0, -1)
    );
  });
});
