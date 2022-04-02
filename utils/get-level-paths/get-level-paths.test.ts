import getLevelPaths from "./get-level-paths";
import getLevelPathsMock from "../../mocks/get-level-paths.mock";

describe("getLevelPaths", () => {
  it("Should generate paths html from the content directory", () => {
    const result = getLevelPaths();
    expect(result).toMatchObject(getLevelPathsMock);
  });
});
