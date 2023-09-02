'use client'
const Error = ({ error, restart }) => {
  console.log(error.massage);
  return (
    <div>
      <h1>{error.massage}</h1>
    </div>
  );
}

export default Error;