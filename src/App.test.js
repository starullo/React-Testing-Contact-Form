import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";



describe('Tests Form', () => {
  test("renders App without crashing", async () => {
    render(<App />);
  
    const firstNameInput = screen.getByLabelText(/first name/i);
  
     const lastNameInput = screen.getByLabelText(/last name/i);
  
    const emailInput = screen.getByLabelText(/email/i);
  
    const messageInput = screen.getByLabelText(/message/i);
  
    const button = screen.getByRole(/button/i);

    fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Sam'}});

    fireEvent.change(lastNameInput, {target: { value: 'Tarullo'}});

    fireEvent.change(emailInput, {target: {value: 'starullo87@gmail.com'}});

    fireEvent.change(messageInput, {target: {value: 'This is the greatest message of all time'}});

    fireEvent.click(button);

    await screen.findByTestId(/json/i);

  });
})