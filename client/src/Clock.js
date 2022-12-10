import React, { useEffect, useState } from "react";

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  
  return (
    <h3>
      {date.toLocaleTimeString()}
    </h3>
  );
}
export default Clock;




