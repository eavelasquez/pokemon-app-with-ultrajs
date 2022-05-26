import React from "react";

const Alert = ({ message }: { message: string }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default Alert;
