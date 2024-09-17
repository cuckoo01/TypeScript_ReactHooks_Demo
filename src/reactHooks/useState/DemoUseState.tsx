// sử dụng để quản lý state (trạng thái) trong các function components
//useState: Được sử dụng để khai báo state count với giá trị ban đầu là 0. 
//setCount là hàm dùng để cập nhật giá trị của count.
//nhấn nút "Increment", hàm setCount sẽ được gọi, 
//và count tăng lên 1. Component sẽ re-render để hiển thị giá trị mới.
import  { useState } from 'react';

function DemoUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default DemoUseState;