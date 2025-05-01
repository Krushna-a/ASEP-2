import React from "react";

const HomeComp2 = () => {
  return (
    <>
      <div className="border py-1 px-8 bg-blue-200 text-md py-5 pl-12 border-[1px] sm:text-2xl font-semibold sm:font-bold sm:border-[3.5px] rounded-tl-full rounded-br-full loadAnimation sm:text-center flex flex-col items-center">
        “Helping lost things find their way home – with just a tap.”
      </div>
      <div className="w-full flex justify-center">

      <img
        src="https://media-hosting.imagekit.io/3d956274ed824e0b/WhatsApp%20Image%202025-05-01%20at%2023.37.17_99545ec2.jpg?Expires=1840731701&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w5gCiyhIOWtFYRL9XuojVvE-U3HBd9rdT9iDgxodY-o9kqTjX1WCZNtq24aYIi-nEE1ENYj6j-~dy9LRA4ym5t2TAVOA-yn~dy0RuSU8ING0~8nzHP1BGVlAgPbcBRRLc1AT7NGm77~abHcVNQ1yPsnqnIuCW82ZDIMN7I9r5TPhSdQvCjjpmbsvxCrv4kavs2ZEWob8aq0VqyjnBeJtYJktLROXHyAU52wFfwR4YVUNYygvOnu7nw5uEIiCKpOnVencznrzUBe9APk~Rdlvy0mgwYF2tGMhoUeA0cAJsaYYChDaSJkrDgQkdY7BD2JkuF-A~SiWMaI3gkKR~wAVzA__"
        alt=""
        className="loadAnimation w-[900px] rounded-lg shadow-xl my-5"
        />
        </div>
      <div className="p-10 border rounded-md text-lg text-gray-700 bg-[#D2D2F6]">
        <h1 className="text-2xl italic font-bold text-center mb-4  bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent loadAnimation">
          What is NFC Lost and Found?
        </h1>
        <div>
          <ul className="text-sm sm:text-lg">
            <li className="mb-4">
              NFC Lost & Found is a smart and simple way to return lost items
              using technology. It works with a tiny NFC (Near Field
              Communication) tag attached to your belongings — like bags,
              wallets, or keychains.
            </li>
            <li>It’s a mix of:</li>
            <li>A tiny smart tag</li>
            <li>A little human kindness</li>
            <li>And a touch of tech magic</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeComp2;
