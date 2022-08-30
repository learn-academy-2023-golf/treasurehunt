import { render, screen } from "@testing-library/react"
import App from "./App"

it("renders header", () => {
  render(<App />)
  const header = screen.getByText("Treasure Hunt Game")
})
