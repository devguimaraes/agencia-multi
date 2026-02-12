import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "../page";

afterEach(cleanup);

describe("Home Page", () => {
	it("renders the Multi BR heading", () => {
		render(<Home />);
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Multi BR");
	});

	it("renders the slogan text", () => {
		render(<Home />);
		expect(screen.getByText("Branding ✹ Conteúdo ✹ Tráfego")).toBeInTheDocument();
	});
});
