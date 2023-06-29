import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("counterTestGroup", () => {
  test("counter must be start 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
  });

  test("minusBtn have correct Test", () => {
    render(<App />);
    const minusBtnElement = screen.getByTestId("minusBtn");
    expect(minusBtnElement).toHaveTextContent("-");
  });

  test("plusBtn have correct Test", () => {
    render(<App />);
    const plusBtnElement = screen.getByTestId("plusBtn");
    expect(plusBtnElement).toHaveTextContent("+");
  });

  test("when plus btn pressed, counter increase 0 to 1", () => {
    render(<App />);
    const plusBtnElement = screen.getByTestId("plusBtn");
    fireEvent.click(plusBtnElement);

    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(1);
  });

  test("when minus btn pressed, counter decrease 0 to -1", () => {
    render(<App />);
    const minusBtnElement = screen.getByTestId("minusBtn");
    fireEvent.click(minusBtnElement);

    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(-1);
  });

  test("on/off btn has blue color", () => {
    render(<App />);
    const onOffBtnElement = screen.getByTestId("onOffBtn");

    expect(onOffBtnElement).toHaveStyle(`background-color: blue`);
  });

  test("when on/off btn pressed, +/-Btn has disabled", () => {
    render(<App />);
    const onOffBtnElement = screen.getByTestId("onOffBtn");

    // onOff버튼을 클릭하면 +/-버튼이 Disabled되는지
    fireEvent.click(onOffBtnElement);
    const plusBtnElement = screen.getByTestId("plusBtn");
    const minusBtnElement = screen.getByTestId("minusBtn");

    expect(plusBtnElement).toBeDisabled();
    expect(minusBtnElement).toBeDisabled();

    // onOff버튼을 다시클릭하면 +/-버튼이 Enabled되는지
    fireEvent.click(onOffBtnElement);
    expect(plusBtnElement).toBeEnabled();
    expect(minusBtnElement).toBeEnabled();
  });
});
