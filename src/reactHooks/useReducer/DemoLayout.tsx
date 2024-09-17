import React, { useReducer } from "react";

// 1. Long Vu

// 2. What is useReducer: useReducer là một Hook trong React được sử dụng để quản lý state phức tạp hơn,
// đặc biệt khi state mới phụ thuộc vào state trước đó.

// 3. How to use useReducer:
// - Định nghĩa một reducer function nhận vào state và action, trả về state mới
// - Gọi useReducer với reducer function và initial state
// - Sử dụng state và dispatch function được trả về từ useReducer

// 4. Why use useReducer:
// - Quản lý state phức tạp hơn useState
// - Xử lý logic update state một cách tập trung
// - Tối ưu hiệu suất cho các components có nhiều update state phức tạp

// 5. Example

// Định nghĩa kiểu cho state
type CounterState = {
  count: number;
};

// Định nghĩa kiểu cho action
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };

// Định nghĩa reducer function
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Component sử dụng useReducer
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h3>useReducer Demo: Counter</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

// Component chính
const UseReducerDemo: React.FC = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default UseReducerDemo;
