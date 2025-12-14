"use client";

import Card from "@/components/card";
import Snow from "@/components/snow";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [join, setJoin] = useState(false);
  return (
    <>
      <Snow />

      <div className="flex p-4 h-screen overflow-hidden items-center justify-center bg-red-700 ">
        <div className="h-80 w-80 fixed top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center py-5">
          <Image className="" src="/images/McDonald's-logo.svg" alt="맥도날드로고" width={320} height={320} />
        </div>
        <div className="w-[calc(100vw-2rem)] text-white text-center z-1">
          {!join && (
            <div className="w-full break-keep absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2  h-full flex flex-col items-center justify-center">
              <h1
                className="text-shadow-lg text-center text-3xl font-bold p-8 opacity-0 animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              >
                당신은 비밀 송년회에 초대되었습니다.
              </h1>
              <button
                className=" opacity-0 cursor-pointer animate-fade-in rounded-2xl p-4 min-w-30 font-semibold bg-neutral-900/50"
                style={{ animationDelay: "2.4s" }}
                onClick={() => setJoin(true)}
              >
                함께하기
              </button>
            </div>
          )}

          {join && <Card />}
        </div>
        <div></div>
      </div>
    </>
  );
}
