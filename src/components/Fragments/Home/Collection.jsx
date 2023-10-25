import React from "react";
import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <section className="grid gap-4">
      <Link to={'/nft/:id'}>
        <img
          className="rounded-2xl hover:scale-95 duration-200"
          src="https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1698624000&Signature=S7HEOUSm000KqkfQeK4RW~dSdSIsmtmPD-2uckpJQspYgiJkRiWf0cvWJzMfihu6R~dB5044aIvcdXnXPY38QsMRI9HhuOxKFYWiEvhZOUkrSDM2HDC54DyhPk7VS57VTqrPP8cLVCKeV5AE-5pWAhvQxmRBxmVfPwweyET4S4yR42L3Qp3YnSH-xA-bA37P6sAyD6K1-hb2ztlbGE-EY~1-P5RGPzOjX4u6yynTEHfrqgzr1jVSamLDyfUfKidOCShdE4hPqY6Le-ERyEmuy6bIZepOxIuUClvsCz6m-zFAdjCbIv8BhFOm6POECbm4PZWqZIsDHLbSBXX6Lpyufw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </Link>
      <div className="grid grid-cols-3 gap-4">
        <img
          className="rounded-2xl hover:scale-95 duration-200"
          src="https://s3-alpha-sig.figma.com/img/4eec/8eba/54b2d345dc1480b247b05bb6f0d1f429?Expires=1698624000&Signature=jDHQGwewSIp4Epud~UurPfffuW7XUIEQ2xND1yf4nsa7X~oY2mSz4lD9bIXDZyLfrlSz27EixmgpT0R1XW6dov8YPjnfyXWXAVvoXlhG84g9O2l1bwHRnFS~cOeJKPGfquN0noYPdhx30Bs47eMa4GXY69y8nUdl-6QEu4CRlp2nDUnYwSHYmKgxfCSKRfV3eapGGvANr7MeHgj~ueYCTVYwigsgWAzKXvNFYcCfj8XCNdTVa-ynV-OXzE4Sayam33zsrc1Snw9zkRm6i0EPn-fflzYZs2l49Hv9kJnsEC22f3NMbM8aIDj9xB5dlvLdSLVxuCYe47CJ~s-4MpoVvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <img
          className="rounded-2xl hover:scale-95 duration-200"
          src="https://s3-alpha-sig.figma.com/img/7e55/1754/df2c85a307298720a7483609e93b5fef?Expires=1698624000&Signature=n9rO92IdBpqSvRyeihKLkTQhXP4~sSmBYF8YkfG7T2HqSE6LKfqlEBIH72~ArwzIS~4lHWDhua-cV8l1aA~1M4r4aehh1Jm3yEoojIuIwiXljRzeFyLkVomS5ftwmZ9Q0nRxytHgnQCJ3m95odhMNuafGsYRfk7DRh4AqYPlkcrmH1Oe6F7WuYNguhuFGd5BmrKIana3iX-DYnHflj8qZGIKXAnawAP3oLZoBuxd4--v5cKvBrOWXHB3jITtG2JuXqUa6osH-p9GbHRqvut1aZK14nOVYr~VV3qJQOKMJFtKhKNYyfBUsKJ4jMRIThK89lSsBhdeE6GPRsc0F6Jakw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="bg-purple rounded-2xl items-center flex hover:scale-95 duration-200">
          <h1 className="text-base font-bold font-spaceMono leading-6 mx-auto">
            1025+
          </h1>
        </div>
      </div>
      <div className="grid gap-3">
        <h1 className="text-xl font-semibold capitalize leading-6">
          DSGN Animals
        </h1>
        <div className="flex gap-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/5abc/712e/766f194b46ede2b0f9edcb91b3031413?Expires=1698624000&Signature=iOrHvmLRzu3~tuDOdy~KN3AgfK8k5GPL6-LZD8ONuAumocRGU96QiKd0UX0HTIIW5bdubLC0HMp8Mqmm7CGqi4kFrT7pLb0uc4G~yMGJroZruWUdU4~cjUIy14e41Njfr4PqAPFZqLf2qYN5DoDRNY0n5o1bV2-xkRx2n55ZvZ6hsr6nzeCHC9jf97kes38mTk1Q3E439xP~dniwMHO9CtaBuCTmHHIoSvEe2mrp45oXw8CETd1vPCm4wfn1rsrNLQOV-f4BnMkzvyHjFKMMRi9f8IToR0678kpJGEwdMkPtDO2gkNKZfTjGWdHPtkhjykmt54jJKHVwotdJgoZzmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <caption className="text-base leading-6">MrFox</caption>
        </div>
      </div>
    </section>
  );
}
