import getLevelPaths from "../services/get-level-paths";
import getLevelPathsMock from "../static-data/get-level-paths.mock";

describe("getLevelPaths", () => {
  it("Should generate paths from the content directory", () => {
    const result = getLevelPaths();
    expect(result).toMatchObject(getLevelPathsMock);
  });
});
