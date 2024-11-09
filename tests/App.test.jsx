import { expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

test("Render the App component", () => {
	render(<App />);
	
	const mainPageHeader = screen.getByText("Vite + React");
	expect(mainPageHeader).toBeInTheDocument();

});