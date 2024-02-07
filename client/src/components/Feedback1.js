import React from 'react';

const Feedback1 = ({ response }) => {

  const dateString = response.createdAt;
  const dateObject = new Date(dateString);
  const extractedDate = dateObject.toISOString().split("T")[0];
  const formattedDate = dateObject.toLocaleDateString('en-GB');

  return (
    <>
      <div className="card-body">
        <div>
          <h6 className="font-weight-bold mb-1 d-inline">{response.name}</h6>{" "}
          <span className='text-muted ml-3'>{formattedDate}</span>
          <p className="text-muted mt-1 small mb-0">{response.contact}</p>
        </div>
        <div className='mt-2'>
          <p className='font-weight-bold small d-inline'>
            Subject:&nbsp;
          </p>
          <p className='d-inline small'>{response.subject}</p>
        </div>

        <p className="mt-3 mb-4 pb-2">
          {response.feedback}
        </p>
        <hr />
      </div>
    </>
  );
}

export default Feedback1;
