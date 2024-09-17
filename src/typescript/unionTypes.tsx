//Hưng
//Union Types (kiểu hợp) trong TypeScript cho phép bạn khai báo một biến có thể nhận một trong nhiều kiểu dữ liệu khác nhau. 
//Điều này giúp bạn linh hoạt hơn trong việc xử lý các tình huống mà giá trị có thể thay đổi kiểu trong quá trình thực thi.

//Bạn sử dụng dấu | để phân tách các kiểu dữ liệu có thể có trong một Union Type.

type HasName = { name: string };
type HasAge = { age: number };

//union
type HasNameOrAge = HasName | HasAge;

const a: HasName = { name: "Hung" };
const b: HasAge = { age: 20 };
const c: HasNameOrAge = { age: 20 };


//intersaction
type HasNameAndAge = HasName & HasAge;
const d: HasNameAndAge = { name: "Hung", age: 20 };





