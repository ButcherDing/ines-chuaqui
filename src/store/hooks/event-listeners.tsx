import { assert } from "console";
import { NoParamCallback } from "fs";
import { useState, useEffect, useRef } from "react";
import { useLinkClickHandler } from "react-router-dom";

export const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }: KeyboardEvent): void => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }: KeyboardEvent): void => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};

////////////

////////////

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLInputElement | null>(null);

  // unsure why this assertion doesn't work: see: https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
  const assertIsNode = (
    eventTarget: EventTarget | null
  ): asserts eventTarget is Node => {
    if (!eventTarget || !("nodeType" in eventTarget)) {
      throw new Error("Node expected");
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      // const checkedIfNode = assertIsNode(event.target);
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
