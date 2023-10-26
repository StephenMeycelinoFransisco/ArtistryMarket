import React from "react";

export default function Artist() {
  return (
    <section className="bg-black-secondary p-5 rounded-2xl hover:scale-95 duration-200">
      <div className="flex gap-5 xl:grid">
        <span className="bg-black w-6 h-6 absolute rounded-full xl:w-8 xl:h-8">
          <p className="relative top-1.5 left-2.5 text-gray xl:left-3 xl:text-sm">
            1
          </p>
        </span>
        <img
          className="w-16 h-16 rounded-full xl:mx-auto xl:w-32 xl:h-32 "
          src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698624000&Signature=B9QpGxaojZUWtHk5pfj31hEUmOEM3awGPCAE64pa-7tfBkVpVTKl2~xb~ODNTNRpNBetv1uHPobYlEP6~G9IrsbqDTHXQB8N~DGhSiN8IeiAjU-IfWKpvuYVH9vG4QC2EfSteEo6F8QEa0MNGHuOQuWtc0qIDT8Buk8r74~3IWR~cuJxknRSU2HGiJmaYRQ4PYApL5BkRwmHTfT7CtIcl2i0oPin~8gvNrCC29NLRIqSYlVb8poUOHl3mf0Ht4cj4AdQa3WjR0eU2Sl4YUshWs5eaAzpIlog9Y~RP9LtdPDLXoyoWfgb9-da9zrSJRaerA326LZYlZ3nLcPJ28NT4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="grid gap-1 xl:text-center">
          <h1 className="text-xl font-semibold capitalize leading-6">
            Dish Studio
          </h1>
          <div className="flex gap-1 xl:justify-center">
            <p className="text-sm text-gray leading-6 xl:text-base ">
              Total Sales:
            </p>
            <span className="text-sm leading-6 xl:text-base">34.35 ETH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
