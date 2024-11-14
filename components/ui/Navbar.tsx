import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export default function Navbar() {
  return (
    <nav className={"fixed inset-x-0 top-0 z-50  shadow-sm  text-white "}>
      <div className="w-full  px-4  py-2 ">
        <div className="flex justify-between h-16 items-center border-opacity-20 rounded-[8px] px-2 	border border-[#FFF]">
          <div className=" rounded-[8px] bg-custom-gradient p-[2px]">
            <div className="flex px-2 h-[46px] w-[46px] items-center justify-center bg-[#000] rounded-[8px]">
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1302 0.474183L19.7202 2.04961L11.0547 10.6305C10.9158 10.7689 10.7507 10.8786 10.5689 10.9535C10.387 11.0285 10.1919 11.067 9.99495 11.067C9.79796 11.067 9.60291 11.0285 9.42104 10.9535C9.23916 10.8786 9.07405 10.7689 8.9352 10.6305L0.265198 2.04961L1.8552 0.475668L9.9927 8.52948L18.1302 0.474183Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex flex-row items-center text-3xl gap-4 font-Ubuntu font-bold ">
            <svg
              width="47"
              height="50"
              viewBox="0 0 47 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6139 20.3798V16.7538L1.45815 33.48L4.49319 32.1349L11.6139 20.3798Z"
                fill="white"
              />
              <path
                d="M44.5907 33.48L34.435 16.7538V20.3798L41.5557 32.1349L44.5907 33.48Z"
                fill="white"
              />
              <path
                d="M13.5399 13.6543V17.2802V25.1169V35.293L8.69556 32.3689L-0.234467 36.3457L21.4777 49.5044V0.495544L13.5399 13.6543Z"
                fill="white"
              />
              <path
                d="M37.3533 32.3689L32.5089 35.293V25.1169V17.2802V13.6543L24.5711 0.495544V49.5044L46.2833 36.3457L37.3533 32.3689Z"
                fill="white"
              />
            </svg>
            ALPACA NETWORK
          </nav>
          <div className="flex items-center gap-4">
            <div className=" rounded-[8px]  border-[#FFFFFF33] border-[2px]  p-[2px]">
              <div className="flex px-2 h-[46px] w-[46px] items-center justify-center bg-[#000] rounded-[8px]">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6133 0.872698C25.6133 0.872698 28.2033 -0.137302 27.9866 2.31536C27.9153 3.32536 27.268 6.8607 26.764 10.684L25.0373 22.0107C25.0373 22.0107 24.8933 23.67 23.5979 23.9587C22.3033 24.2467 20.3606 22.9487 20.0006 22.66C19.7126 22.4434 14.6046 19.1967 12.806 17.61C12.302 17.1767 11.726 16.3114 12.878 15.3014L20.4326 8.0867C21.2959 7.22003 22.1593 5.20003 18.562 7.65336L8.48862 14.5067C8.48862 14.5067 7.33729 15.2287 5.17929 14.5794L0.501952 13.136C0.501952 13.136 -1.22471 12.054 1.72529 10.972C8.92062 7.58136 17.7706 4.1187 25.6126 0.872032"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className=" rounded-[8px]  border-[#FFFFFF33] border-[2px]  p-[2px]">
              <div className="flex px-2 h-[46px] w-[46px] items-center justify-center bg-[#000] rounded-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1_37"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <path d="M0 0H24V24H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1_37)">
                    <path
                      d="M18.9 1.12457H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2726L4.15543 22.8754H0.471429L9.07029 13.0183L0 1.12629H7.59429L12.8331 8.07429L18.9 1.12457ZM17.6057 20.6674H19.6457L6.48 3.21772H4.29257L17.6057 20.6674Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
