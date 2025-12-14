"use client";

export default function Snow() {
  return (
    <div className="snow">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </div>
  );
}
