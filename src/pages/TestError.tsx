// ErrorThrowing.tsx
// import React from "react";

export default function ErrorThrowing() {
  // This will throw an error as soon as the component renders
  throw new Error("💥 This is a test error!");
  return <div>This will never render</div>;
}