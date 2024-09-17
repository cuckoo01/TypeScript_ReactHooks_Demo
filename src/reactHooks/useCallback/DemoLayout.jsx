//useCallback là một hook trong React giúp bạn ghi nhớ (memoize),Điều này cải thiện hiệu suất, đặc biệt khi truyền hàm đó như là prop cho các component con sử dụng React.memo, từ đó giúp tránh re-render không cần thiết.
//useCallback được sử dụng khi bạn muốn truyền một hàm như prop cho component con được tối ưu hóa, Khi bạn cần đảm bảo hàm không được tạo lại mỗi lần render, trừ khi các giá trị phụ thuộc của nó thay đổi.
import React, { useCallback, useState } from 'react';

function Usecallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Usecallback;
