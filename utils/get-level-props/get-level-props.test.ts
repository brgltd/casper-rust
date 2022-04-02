import getLevelProps from "./get-level-props";
import getLevelPropsMock from "../../mocks/get-level-props.mock";

describe("getLevelProps", () => {
  it("Should generate the html from the markdown content", async () => {
    // This test is important to check if updates on remark, remark-html and remark-prism
    // don't break the generated html (missing tags, classes, etc).
    const result = await getLevelProps({ id: "test" });
    expect(result).toStrictEqual(getLevelPropsMock);
  });
});
