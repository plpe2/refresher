"use client";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState<number>(0);
  return (
    <div>
      {score}
      Dashboard <p>Home</p>
    </div>
  );
}
