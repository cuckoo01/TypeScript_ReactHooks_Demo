// enum :  một số lựa chọn cố định của một giá trị được cung cấp, giá trị - mặc định là một số tự động tăng - có thể là số, chuỗi hoặc được tính toán.
// được sử dụng để định nghĩa các tập giá trị cố định như trạng thái người dùng, loại thông báo, mức độ ưu tiên, và loại tiền tệ. 
//Việc sử dụng enum giúp code dễ hiểu, rõ ràng, và giúp quản lý các giá trị có thể thay đổi dễ dàng trong ứng dụng React
//case 1: Enum chuỗi

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
  }
  
  const EnumDemo = () => {
    const favoriteColor = Color.Blue;
    return <div>Favorite Color: {favoriteColor}</div>;
  };
  
  export default EnumDemo;

  //Enums có thể kết hợp các giá trị chuỗi và số,
  
//   import React, { useState } from 'react';

//   // Định nghĩa enum cho trạng thái người dùng
//   enum UserStatus {
//     Online = 'Online',
//     Offline = 'Offline',
//     Idle = 'Idle',
//   }
  
//   const UserStatusEnum = () => {
//     const [status, setStatus] = useState<UserStatus>(UserStatus.Offline);
  
//     // Hàm thay đổi trạng thái
//     const changeStatus = (newStatus: UserStatus) => {
//       setStatus(newStatus);
//     };
  
//     return (
//       <div>
//         <h2>User is currently: {status}</h2>
//         <button onClick={() => changeStatus(UserStatus.Online)}>Go Online</button>
//         <button onClick={() => changeStatus(UserStatus.Offline)}>Go Offline</button>
//         <button onClick={() => changeStatus(UserStatus.Idle)}>Set Idle</button>
//       </div>
//     );
//   };
  
//   export default UserStatusEnum;
  