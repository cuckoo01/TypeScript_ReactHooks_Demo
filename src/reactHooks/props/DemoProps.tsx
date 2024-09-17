//props được sử dụng để truyền dữ liệu từ component cha (parent) sang component con (child). 
//Điều này giúp tạo ra các thành phần có thể tái sử dụng và tùy chỉnh dễ dàng.
// Component con nhận props từ component cha
const Greeting = (props: { name: string }) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Component cha truyền props cho component con
const UsePropsDemo = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default UsePropsDemo;
