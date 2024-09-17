//usememo là là một hook trong React được sử dụng để tối ưu hóa hiệu suất bằng cách ghi nhớ (memoizing) 
// tại sao phải dùng usememo : để lưu các giá trị tính toán nặng và bạn không muốn chạy lại mỗi lần component re-render.


import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [num, setNum] = useState(10); 

  const fibonacci = n => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h3>Fibonacci của {num}: {fibValue}</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default UseMemo;
