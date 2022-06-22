import React, { useState } from "react";

function Clock() {
  const [time, setTime] = useState();
  setInterval(() => {
    let date = new Date().toLocaleTimeString();
    setTime(date);
  }, 1000);

  return (
    <p>
      {time}.{time / 12 < 1 ? "A.M" : "P.M"}
    </p>
  );
}
export default Clock;
