import { expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Render the App component", () => {
	render(<App />);
	
	const mainPageHeader = screen.getByText("Vite + React");
	expect(mainPageHeader).toBeInTheDocument();

});

test("Render the App component with a button that makes a number go up", async () => {
	render(<App />);

	// Find the button element on the screen 
	// screen.getByRole
	// document.getElementById
	// screen.getByText
	let counterButton = screen.getByTestId("counterButton");

	// Check the button's text for "count is 0"
	expect(counterButton).toBeInTheDocument();
	expect(counterButton).toHaveTextContent("count is 0");

	// Click on the button
	const user = userEvent.setup();

	await user.click(counterButton);

	// Check the button's text for "count is 1",
	expect(counterButton).toHaveTextContent("count is 1");
});