// useHooks: Đây là một hook trong React 18 nhằm giúp tạo ra các ID duy nhất cho các phần tử trong một component.
import React, { useId } from 'react';
function MyForm() {
    //const id = 'my-input';
   const id = useId();
  console.log({id});

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input type='text' name='name' id={id} />
    </div>
 );
}
export default MyForm;
