//useLayoutEffect là một hook trong React tương tự như useEffect,
//nhưng nó có một điểm khác biệt chính: nó thực hiện các tác vụ phụ(side effects)
//ngay sau khi DOM đã được cập nhật nhưng trước khi trình duyệt có cơ hội để vẽ lại(paint) màn hình

//Khi cần đọc hoặc cập nhật layout trực tiếp từ DOM, Tránh nhấp nháy

import React, { useState, useLayoutEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 5) {
      setCount(0);
    }
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
