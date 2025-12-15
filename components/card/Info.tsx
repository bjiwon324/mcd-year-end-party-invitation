import Image from "next/image";
import Link from "next/link";

export default function Info() {
  return (
    <div
      className="w-[calc(100vw-2rem)] max-w-2xl min-h-114
                 backdrop-blur-md bg-neutral-200/15
                 shadow-2xl/30 rounded-3xl
                 p-5 sm:p-6
                 text-start"
    >
      <Link
        href="https://map.naver.com/p/search/%EC%98%A4%ED%95%A9%EC%A7%91/place/1437045521?placePath=/home?entry=pll&from=map&fromNxList=true&fromPanelNum=2&timestamp=202512142031&locale=ko&svcName=map_pcv5&searchText=%EC%98%A4%ED%95%A9%EC%A7%91&searchType=place&c=15.00,0,0,0,dh"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer flex flex-col items-center justify-center overflow-hidden rounded-2xl"
      >
        <p
          className="w-full text-white font-bold flex items-center gap-2 py-2
                      text-xl leading-tight"
        >
          <Image src="/images/placeholder.png" alt="오합집" width={26} height={26} />
          오합집
        </p>

        <div className="rounded-2xl overflow-hidden w-full">
          <Image
            src="/images/food.jpg"
            alt="모임 장소 음식 사진"
            width={250}
            height={250}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </Link>

      {/* 날짜 */}
      <p
        className="mt-4 font-semibold flex items-center gap-2
                    text-base leading-relaxed"
      >
        <Image src="/images/calendar.png" alt="달력" width={22} height={22} />
        12월 18일 목요일 오후 8시
      </p>

      <div className="pt-2">
        {/* 선물 */}
        <div className="flex items-start gap-2">
          <Image src="/images/gift.png" alt="선물상자" width={22} height={22} />
          <p className="text-base leading-relaxed break-keep">
            <strong className="font-bold">15,000원 ~ 20,000원</strong> 상당의 선물 준비하기
          </p>
        </div>

        {/* 경고 */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-red-500 font-extrabold text-lg">⚠️</span>
          <p className="font-bold text-yellow-400 text-base leading-snug text-center">불참 / 지각 시 위약금 발생</p>
        </div>
      </div>
    </div>
  );
}
