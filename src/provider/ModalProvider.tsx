"use client";
import { ReactNode } from "react";
import reactDom from "react-dom";

export default function ModalProvider({ children }: { children: ReactNode }) {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.querySelector("#modalPortal") as Element;
  return reactDom.createPortal(children, node);
}
