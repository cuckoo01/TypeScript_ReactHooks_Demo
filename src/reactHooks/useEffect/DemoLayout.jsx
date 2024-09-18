//useEffect là một hook trong React giúp thực hiện các tác vụ gắn kết (side effects) như gọi API, thay đổi DOM, tương tác với các thư viện bên ngoài, và các tác vụ khác mà ảnh hưởng đến state của ứng dụng.
//useEffect được gọi bên trong component? Đặt useEffect bên trong component cho phép chúng ta truy xuất đến state count (hoặc bất kỳ prop nào) bên trong effect

//các trường hợp dùng use effect()
import React, { useState, useEffect } from "react";

function CombinedEffects() {
  const [count, setCount] = useState(0);

  // Chạy sau mỗi lần re-render
  useEffect(() => {
    console.log("Component re-rendered!");

    // Chỉ chạy một lần khi component được mount
    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  // Chạy khi count thay đổi
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default CombinedEffects;
