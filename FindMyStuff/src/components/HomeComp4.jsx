import React from "react";

const HomeComp4 = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl italic font-bold text-center my-10 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent loadAnimation">
        Why You Should Register ?
      </h1>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col gap-8 items-between">
          <div>
            🔒{" "}
            <span className="loadAnimation font-bold text-lg mr-2">
              Peace of Mind:
            </span>{" "}
            <span className="loadAnimation">
              If you ever lose your bag, wallet, or keys, it can be returned
            </span>
            easily.
          </div>
          <div>
            📱
            <span className=" loadAnimation font-bold text-lg mr-2">
              {" "}
              Instant Contact:
            </span>{" "}
            <span className="loadAnimation">
              Finders can instantly get your contact info by scanning the NFC
            </span>
            tag—no app needed!
          </div>
          <div>
            ⚡{" "}
            <span className=" loadAnimation font-bold text-lg mr-2">
              Quick & Simple:
            </span>{" "}
            <span className="loadAnimation">
              Setup takes less than a minute, and it works on almost all
            </span>
            smartphones.
          </div>
          <div>
            💻{" "}
            <span className=" loadAnimation font-bold text-lg mr-2">
              Smart Technology:
            </span>{" "}
            <span className="loadAnimation">
              Join a growing community using smart tags to keep their things
              safe.
            </span>
          </div>
          <div>
            ✨
            <span className=" loadAnimation font-bold text-lg mr-2">
              {" "}
              Because People Care:
            </span>{" "}
            <span className="loadAnimation">
              Make it easy for kind people to return what you’ve lost.
            </span>
          </div>
        </div>
        <div className="w-full my-5 sm:my-0 sm:w-1/3 shadow-xl hover:scale-105 transition-all ease-out duration-300 rounded-xl">
          <img
            src="https://media-hosting.imagekit.io/25234098e7b04df0/WhatsApp%20Image%202025-05-01%20at%2023.38.28_8d92a566.jpg?Expires=1840734812&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mGBUSukkTo5mbgQHBs~HqmOflYN8rEtDZw3KrXRZHXyYAhb~~7h00hu1bD0FzHDhToLPFJiYzVpguGKeefHZ2ECtQrtv8j4kTw2G8FgteY4bJKFTBNsnxSR23wAztDVVCZkW8GGYPEce5BPF3tMEcU8dmQ-0H4Atvekxigcc9EVZ45KybQG1WkXx8TZbbp1QtklB~WrdSnPgTLfJko2rh-~9KAW6fA1VOkgZgYzH-lMeUjkJaLOHdLY9GuxKiKxk0rXwLIb2Ig8n9MvRMc09JXCW3Wzh1otgHEFaWm1~1j8qDQ8stbawWTv9XCyqmsgNnRUrEPrmyrKPBvWHl-msiA__"
            alt=""
            className="rounded-lg loadAnimation"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded-full px-8 py-2 bg-blue-600 text-lg font-bold text-gray-200 hover:scale-105 hover:border-3 hover:border-gray-400 transition-all ease-out duration-100">
          Register
        </button>
      </div>
    </div>
  );
};

export default HomeComp4;
