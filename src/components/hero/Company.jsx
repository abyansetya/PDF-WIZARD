import React from "react";

export default function Company() {
  return (
    <div className="p-[6em]">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] font-bold">You're in Good Company!</h1>
        <div className="flex pt-[80px] gap-[60px]">
          <img
            src="https://s.smallpdf.com/static/41bb41defdd9612c.svg"
            alt=""
          />
          <img
            src="https://s.smallpdf.com/static/51b2bdae81f75927.svg"
            alt=""
          />
          <img
            src="https://s.smallpdf.com/static/f5dda8988562c4fd.svg"
            alt=""
          />
          <img
            src="https://s.smallpdf.com/static/8bdb4f62368c3678.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
