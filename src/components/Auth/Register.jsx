import React from "react";
import Form from "../Fragments/Form/Form";

export default function Register() {
  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
        <div className="grid ">
          <img
            className="h-60 object-cover object-center w-full lg:h-full"
            src="https://s3-alpha-sig.figma.com/img/0b34/7e10/5d353eae4c7b063b0da73eddb78c3a89?Expires=1698624000&Signature=OJ~87lnlkJ4h7P3fdL3oSETHYs16c6-w95WiSEu2Fl~b1X7zesIr8u4QduUjcorWjtemskHEc5c9PxzTf0z~7mUasRBNh0Lc9xQ9ixYpHo3nEprQNwvm8b4oT9uKn4yCltceNrYpT7GJvUxjKXCuiMgZj2I1OCpOT9j9L2GncsvLcIYEjCX1-~8fWovrp81-mKQ54sqoUeC7iYXvfcbuPGbil1am0nSo3KpgqttksY6XhF~ErD4fMIouFwGFZBGrdfbvaX3qJUPRBr2z1aQldCpliAirsFwjo8EIcDfTj~~Dc38DPdWGD-xW-lL-xXlrmLg6aupjwCmf77U-71R6RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="grid my-8 max-w-[17.5rem] mx-auto lg:max-w-sm lg:mx-0 xl:max-w-md xl:my-24">
          <Form />
        </div>
      </section>
    </>
  );
}
