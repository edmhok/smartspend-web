import React from 'react'

export default function Footer() {
  return (
    <div className=" border-0 pt-10">
      <div className="w-full flex-row flex justify-between">
        <div>
          <a className="text-decoration-none" href="#">SmartSpend</a>
          {' '}
          © 2023
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;Artificers
        </div>
      </div>
    </div>
  );
}