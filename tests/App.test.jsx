import { expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserAuthContextProvider } from "../src/contexts/UserAuthContextProvider";

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



test("Render App component with JWT on display", async () => {
	render(
		<UserAuthContextProvider>
			<App />
		</UserAuthContextProvider>
	);

	let jwtHeading = screen.getByTestId("jwt-header");
	expect(jwtHeading).toHaveTextContent("");

	// Find the sign-up button
	let signUpButton = screen.getByText("Sign up a user");

	// Setup a user 
	const user = userEvent.setup();

	// Click on the sign-up button
	await user.click(signUpButton);

	// console.log(jwtHeading);
	console.log("Jwt Heading content: " + jwtHeading.textContent);
	// Check the JWT heading for a JWT
	expect(jwtHeading).not.toHaveTextContent();

})
