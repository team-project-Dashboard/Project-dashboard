import React from "react";
import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

const NewForm = () => {
  const flag = true;
  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
};

export default NewForm;
