import React from "react";

export default function Collect() {
  return (
    <div className="containy w-full py-6 font-jakarta">
      <div className="innercontainy flex flex-col items-center">
        <h1 className="font-bold text-[32px] pb-[50px]">
          Collect Online PDF Signatures in 24 Hours
        </h1>
        <div className="flex w-full justify-center gap-[80px]">
          <div className="flex flex-col items-center">
            <img
              src="	https://s.smallpdf.com/static/cms/f/102628/x/a0d0c51bc3/_img-3-highlights.svg"
              alt=""
              width={230}
            />
            <h1 className="font-bold text-[22px] mt-2">3 Weeks by Post</h1>
            <p className="w-[310px] text-center mt-2">
              Printing out contracts, trips to the post office, and paying for
              postage stamps? No, thanks!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="	https://s.smallpdf.com/static/cms/f/102628/x/0cba2c6904/_img-3-highlights-1.svg"
              alt=""
              width={230}
            />
            <h1 className="font-bold text-[22px] mt-2">1 Week by Email</h1>
            <p className="w-[310px] text-center mt-2">
              Your client prints, signs, scans, and converts before sending the
              contract. Quicker than post, but not much simpler!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/x/a33e111425/_img-3-highlights-2.svg"
              alt=""
              width={230}
            />
            <h1 className="font-bold text-[22px] mt-2">
              ± 24 Hours With eSign
            </h1>
            <p className="w-[310px] text-center mt-2">
              Your client completes contracts online—no printing, no scanning,
              no fuss. Digitally timestamped and ready to go!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
