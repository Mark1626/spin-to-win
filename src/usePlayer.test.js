import React from "react";
import { usePlayers } from "./usePlayers";
import { render, fireEvent } from "@testing-library/react";

describe("Should test usePlayers hook", () => {
  const value = JSON.stringify([
    { name: "PlayerA", checked: true },
    { name: "PlayerB", checked: false },
    { name: "PlayerC", checked: false },
    { name: "PlayerD", checked: true },
  ]);

  test("should be able to fetch data when present in local storage", () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const TestComponent = () => {
      const p = usePlayers();
      return (
        <>
          <div></div>
        </>
      );
    };
    render(<TestComponent />);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith(
      "spin-to-win-players"
    );
  });

  test("should be able to fetch data when not present in local storage", () => {
    Storage.prototype.getItem = jest.fn(() => value);
    const TestComponent = () => {
      const p = usePlayers();
      return (
        <>
          <div></div>
        </>
      );
    };
    render(<TestComponent />);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith(
      "spin-to-win-players"
    );
  });

  test("should be able to set data in local storage", () => {
    Storage.prototype.getItem = jest.fn(() => value);
    Storage.prototype.setItem = jest.fn();
    const newPlayers = [{ name: "PlayerE", checked: true }];
    const TestComponent = () => {
      const { persistPlayers } = usePlayers();
      return (
        <>
          <a
            data-testid="persist"
            onClick={() => persistPlayers(newPlayers)}
          ></a>
        </>
      );
    };
    const component = render(<TestComponent />);
    const button = component.getByTestId("persist");

    fireEvent.click(button);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      "spin-to-win-players",
      JSON.stringify(newPlayers)
    );
  });
});
