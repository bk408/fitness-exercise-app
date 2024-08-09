import { render, screen } from "@testing-library/react";

import App from "./App";


test("render the app", () => {
    render(<App />)
    const linkElement = screen.getByText(/Fitness Club/i);
    expect(linkElement).toBeInTheDocument();
})


