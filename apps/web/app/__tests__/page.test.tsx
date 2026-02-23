import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "../page";

afterEach(cleanup);

describe("Home Page", () => {
	it("renders the logo with Multi BR alt text", () => {
		render(<Home />);
		expect(screen.getByAltText("Multi BR")).toBeInTheDocument();
	});

	it("renders the slogan in the main heading", () => {
		render(<Home />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent(/Branding/);
		expect(heading).toHaveTextContent(/Conteúdo/);
		expect(heading).toHaveTextContent(/Tráfego/);
	});

	it("renders the value proposition text", () => {
		render(<Home />);
		expect(screen.getByText(/Estratégia digital sem enrolação/i)).toBeInTheDocument();
	});
});
