"use client";

import React, { useEffect } from "react";

function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Something went wrong</h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorBoundary;
