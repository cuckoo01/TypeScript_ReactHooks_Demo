//Hưng
// Generics là một tính năng mạnh mẽ cho phép bạn viết code có thể tái sử dụng và linh hoạt, 
//hoạt động với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo an toàn kiểu.

//case 1
function getFirstElement<Hung>(array: Hung[]) {
    return array[0];
}

const number = [1, 2, 3];
const getFirst = getFirstElement(number);

const name = ['a', 'b', 'c'];
const getFirst2 = getFirstElement(name);

const cum = [true, "false", 1];
const getFirst4 = getFirstElement(cum);


//case 2:

// type ApiRes<Data> = {
//     data: Data
//     isError: boolean
// }

// type UserRespnse = ApiRes<{ name: string, age: number }>
// type PageResponse = ApiRes<{ title: string }>


// const response: UserRespnse = {
//     data: {
//         name: 'Hung',
//         age: 20
//     },
//     isError: true
// }


// const responsePage: PageResponse = {
//     data: {
//         title: "Title"
//     },
//     isError: false
// }


// //case 3: override generic

// type ApiResponse<Data = { name: string, age: number }> = {
//     data: Data
//     isError: boolean
// }

// const response2: ApiResponse = {
//     data: {
//         name: 'Hung',
//         age: 20
//     },
//     isError: true
// }

// const responsePage2: ApiResponse<string> = {
//     data: "Hung",
//     isError: true
// }