import { render } from "@test";
import { Main } from "./index";


describe("Main", () => {
    it("renders without crashing", () => {
        const { getByText } = render(
            <Main>HOBA</Main>
        );
        expect(getByText("HOBA")).toBeDefined();

    });
});

