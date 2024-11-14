import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="text-[#fff] font-Ubuntu bg-[url('/bg.png')] bg-contain bg-no-repeat bg-center    grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  mx-auto ">
      <Navbar />
      <main className=" flex flex-col  row-start-2 items-center ">
        <span className=" font-bold text-5xl">WELCOME TO ALPACA NETWORK</span>
        <span className="text-2xl font-normal ">
          Connecting you with the future.{" "}
        </span>

        <div className="flex gap-4 items-center mt-20 flex-col sm:flex-row">
          <div className="   bg-custom-gradient p-[2px] rounded-[8px]">
            <div className=" bg-[#000] rounded-[8px]">
              <div className=" backdrop-blur-[12%] bg-contain bg-[url('/card-bg.png')] rounded-[8px] ">
                <Card className="w-[350px] h-[350px] border-none   bg-transparent rounded-[8px]     ">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <svg
                        width="72"
                        height="73"
                        viewBox="0 0 72 73"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M36.84 58.19C38.952 58.04 41.036 57.703 43.092 57.179C45.622 57.9373 48.2915 58.1096 50.898 57.683C51.0015 57.6696 51.1057 57.6616 51.21 57.659C52.14 57.659 53.361 58.193 55.14 59.318V57.47C55.1404 57.148 55.2272 56.8321 55.3913 56.555C55.5554 56.278 55.7908 56.0501 56.073 55.895C56.847 55.466 57.567 54.965 58.224 54.419C60.816 52.25 62.28 49.361 62.28 46.301C62.279 45.2891 62.118 44.2837 61.803 43.322C62.583 41.882 63.219 40.364 63.684 38.792C65.184 41.012 65.994 43.622 66 46.301C66 50.459 64.038 54.341 60.645 57.176C60.0774 57.6482 59.4813 58.085 58.86 58.484V62.81C58.86 64.298 57.12 65.15 55.893 64.268C54.7322 63.4107 53.5308 62.6098 52.293 61.868C51.9371 61.6588 51.5672 61.4744 51.186 61.316C50.166 61.468 49.128 61.545 48.072 61.547C43.836 61.547 39.921 60.293 36.84 58.19ZM14.442 49.532C9.09 45.062 6 38.954 6 32.42C6 19.058 18.774 8.378 34.371 8.378C49.968 8.378 62.745 19.058 62.745 32.42C62.745 45.782 49.968 56.459 34.371 56.459C32.617 56.459 30.889 56.326 29.187 56.06C28.452 56.231 25.515 57.953 21.282 61.004C19.752 62.111 17.574 61.043 17.574 59.18V51.8C16.4773 51.1218 15.4306 50.3658 14.442 49.538M29.292 51.512C29.418 51.512 29.548 51.522 29.682 51.542C31.2317 51.799 32.8001 51.9274 34.371 51.926C47.547 51.926 58.092 43.109 58.092 32.42C58.092 21.731 47.547 12.917 34.371 12.917C21.201 12.917 10.65 21.734 10.65 32.42C10.65 37.589 13.113 42.455 17.469 46.097C18.569 47.013 19.765 47.834 21.057 48.56C21.78 48.965 22.227 49.715 22.227 50.525V54.782C25.575 52.562 27.777 51.512 29.289 51.512"
                          fill="url(#paint0_linear_1_50)"
                        />
                        <path
                          d="M22.875 36.5C23.8696 36.5 24.8234 36.1049 25.5267 35.4017C26.2299 34.6984 26.625 33.7446 26.625 32.75C26.625 31.7554 26.2299 30.8016 25.5267 30.0983C24.8234 29.3951 23.8696 29 22.875 29C21.8804 29 20.9266 29.3951 20.2233 30.0983C19.5201 30.8016 19.125 31.7554 19.125 32.75C19.125 33.7446 19.5201 34.6984 20.2233 35.4017C20.9266 36.1049 21.8804 36.5 22.875 36.5ZM35.061 36.5C36.0556 36.5 37.0094 36.1049 37.7127 35.4017C38.4159 34.6984 38.811 33.7446 38.811 32.75C38.811 31.7554 38.4159 30.8016 37.7127 30.0983C37.0094 29.3951 36.0556 29 35.061 29C34.0664 29 33.1126 29.3951 32.4094 30.0983C31.7061 30.8016 31.311 31.7554 31.311 32.75C31.311 33.7446 31.7061 34.6984 32.4094 35.4017C33.1126 36.1049 34.0664 36.5 35.061 36.5ZM47.25 36.503C48.2446 36.503 49.1984 36.1079 49.9017 35.4047C50.6049 34.7014 51 33.7476 51 32.753C51 31.7584 50.6049 30.8046 49.9017 30.1014C49.1984 29.3981 48.2446 29.003 47.25 29.003C46.2554 29.003 45.3016 29.3981 44.5984 30.1014C43.8951 30.8046 43.5 31.7584 43.5 32.753C43.5 33.7476 43.8951 34.7014 44.5984 35.4047C45.3016 36.1079 46.2554 36.503 47.25 36.503Z"
                          fill="url(#paint1_linear_1_50)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_50"
                            x1="6"
                            y1="8.378"
                            x2="62.13"
                            y2="68.2531"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F69C29" />
                            <stop offset="0.32" stop-color="#F55376" />
                            <stop offset="0.64" stop-color="#7B61FF" />
                            <stop offset="1" stop-color="#6FCFB2" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_50"
                            x1="19.125"
                            y1="29"
                            x2="22.4718"
                            y2="43.2182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F69C29" />
                            <stop offset="0.32" stop-color="#F55376" />
                            <stop offset="0.64" stop-color="#7B61FF" />
                            <stop offset="1" stop-color="#6FCFB2" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </CardTitle>
                    <CardDescription className="font-Ubuntu pb-2 font-bold text-[32px] text-[#fff]">
                      PacaChat
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="font-Ubuntu pb-1 font-normal text-[20px] text-[#FFFFFF80] ">
                    PacaChat unites AI experts and developers to innovate, share
                    expertise, and shape the future of decentralized AI. Join
                    today!
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <svg
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.72003 21.5C6.72003 13.604 13.104 7.22 21 7.22C28.896 7.22 35.28 13.604 35.28 21.5C35.28 29.396 28.896 35.78 21 35.78C13.104 35.78 6.72003 29.396 6.72003 21.5ZM33.6 21.5C33.6 14.528 27.972 8.9 21 8.9C14.028 8.9 8.40003 14.528 8.40003 21.5C8.40003 28.472 14.028 34.1 21 34.1C27.972 34.1 33.6 28.472 33.6 21.5Z"
                        fill="url(#paint0_linear_1_55)"
                      />
                      <path
                        d="M19.572 28.472L26.544 21.5L19.572 14.528L20.748 13.352L28.896 21.5L20.748 29.648L19.572 28.472Z"
                        fill="url(#paint1_linear_1_55)"
                      />
                      <path
                        d="M27.72 20.66V22.34H13.44V20.66H27.72Z"
                        fill="url(#paint2_linear_1_55)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_55"
                          x1="35.28"
                          y1="7.22"
                          x2="6.72003"
                          y2="35.78"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F69C29" />
                          <stop offset="0.32" stop-color="#F55376" />
                          <stop offset="0.64" stop-color="#7B61FF" />
                          <stop offset="1" stop-color="#6FCFB2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1_55"
                          x1="28.896"
                          y1="13.352"
                          x2="14.8472"
                          y2="21.3902"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F69C29" />
                          <stop offset="0.32" stop-color="#F55376" />
                          <stop offset="0.64" stop-color="#7B61FF" />
                          <stop offset="1" stop-color="#6FCFB2" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1_55"
                          x1="27.72"
                          y1="20.66"
                          x2="27.3301"
                          y2="23.9741"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F69C29" />
                          <stop offset="0.32" stop-color="#F55376" />
                          <stop offset="0.64" stop-color="#7B61FF" />
                          <stop offset="1" stop-color="#6FCFB2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          <div className=" bg-transparent   rounded-[8px]">
            <div className=" background-image-div border-[#FFFFFF33]  border-[3px]   backdrop-blur-[12%]  rounded-[8px] ">
              <Card className="w-[350px] h-[350px] border-none  bg-transparent rounded-[8px]     ">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57 21.5H15C14.2044 21.5 13.4413 21.8161 12.8787 22.3787C12.3161 22.9413 12 23.7044 12 24.5V63.5C12 64.2956 12.3161 65.0587 12.8787 65.6213C13.4413 66.1839 14.2044 66.5 15 66.5H57C57.7956 66.5 58.5587 66.1839 59.1213 65.6213C59.6839 65.0587 60 64.2956 60 63.5V24.5C60 23.7044 59.6839 22.9413 59.1213 22.3787C58.5587 21.8161 57.7956 21.5 57 21.5Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.5 27.5V17C25.5 15.6211 25.7716 14.2557 26.2993 12.9818C26.8269 11.7079 27.6004 10.5504 28.5754 9.57538C29.5504 8.60036 30.7079 7.82694 31.9818 7.29927C33.2557 6.77159 34.6211 6.5 36 6.5C37.3789 6.5 38.7443 6.77159 40.0182 7.29927C41.2921 7.82694 42.4496 8.60036 43.4246 9.57538C44.3996 10.5504 45.1731 11.7079 45.7007 12.9818C46.2284 14.2557 46.5 15.6211 46.5 17V27.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </CardTitle>
                  <CardDescription className="font-Ubuntu pb-2 font-bold text-[32px] text-[#fff]">
                    PacaMarket
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-Ubuntu pb-1 font-normal text-[20px] text-[#FFFFFF80] ">
                  PacaMarket offers cutting-edge AI solutions. Discover, buy,
                  and integrate AI models, tools, and services from global
                  experts.
                </CardContent>
                <CardFooter className="flex justify-between">
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.72 21.5C6.72 13.604 13.104 7.22 21 7.22C28.896 7.22 35.28 13.604 35.28 21.5C35.28 29.396 28.896 35.78 21 35.78C13.104 35.78 6.72 29.396 6.72 21.5ZM33.6 21.5C33.6 14.528 27.972 8.9 21 8.9C14.028 8.9 8.4 14.528 8.4 21.5C8.4 28.472 14.028 34.1 21 34.1C27.972 34.1 33.6 28.472 33.6 21.5Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M19.572 28.472L26.544 21.5L19.572 14.528L20.748 13.352L28.896 21.5L20.748 29.648L19.572 28.472Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M27.72 20.66V22.34H13.44V20.66H27.72Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </svg>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className=" bg-transparent   rounded-[8px]">
            <div className=" background-image-div border-[#FFFFFF33]  border-[3px]   backdrop-blur-[12%]  rounded-[8px] ">
              <Card className="w-[350px] h-[350px] border-none  bg-transparent rounded-[8px]     ">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57 21.5H15C14.2044 21.5 13.4413 21.8161 12.8787 22.3787C12.3161 22.9413 12 23.7044 12 24.5V63.5C12 64.2956 12.3161 65.0587 12.8787 65.6213C13.4413 66.1839 14.2044 66.5 15 66.5H57C57.7956 66.5 58.5587 66.1839 59.1213 65.6213C59.6839 65.0587 60 64.2956 60 63.5V24.5C60 23.7044 59.6839 22.9413 59.1213 22.3787C58.5587 21.8161 57.7956 21.5 57 21.5Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.5 27.5V17C25.5 15.6211 25.7716 14.2557 26.2993 12.9818C26.8269 11.7079 27.6004 10.5504 28.5754 9.57538C29.5504 8.60036 30.7079 7.82694 31.9818 7.29927C33.2557 6.77159 34.6211 6.5 36 6.5C37.3789 6.5 38.7443 6.77159 40.0182 7.29927C41.2921 7.82694 42.4496 8.60036 43.4246 9.57538C44.3996 10.5504 45.1731 11.7079 45.7007 12.9818C46.2284 14.2557 46.5 15.6211 46.5 17V27.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </CardTitle>
                  <CardDescription className="font-Ubuntu pb-2 font-bold text-[32px] text-[#fff]">
                    PacaMarket
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-Ubuntu pb-1 font-normal text-[20px] text-[#FFFFFF80] ">
                  PacaMarket offers cutting-edge AI solutions. Discover, buy,
                  and integrate AI models, tools, and services from global
                  experts.
                </CardContent>
                <CardFooter className="flex justify-between">
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.72 21.5C6.72 13.604 13.104 7.22 21 7.22C28.896 7.22 35.28 13.604 35.28 21.5C35.28 29.396 28.896 35.78 21 35.78C13.104 35.78 6.72 29.396 6.72 21.5ZM33.6 21.5C33.6 14.528 27.972 8.9 21 8.9C14.028 8.9 8.4 14.528 8.4 21.5C8.4 28.472 14.028 34.1 21 34.1C27.972 34.1 33.6 28.472 33.6 21.5Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M19.572 28.472L26.544 21.5L19.572 14.528L20.748 13.352L28.896 21.5L20.748 29.648L19.572 28.472Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M27.72 20.66V22.34H13.44V20.66H27.72Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </svg>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className=" bg-transparent   rounded-[8px]">
            <div className=" background-image-div border-[#FFFFFF33]  border-[3px]   backdrop-blur-[12%]  rounded-[8px] ">
              <Card className="w-[350px] h-[350px] border-none  bg-transparent rounded-[8px]     ">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57 21.5H15C14.2044 21.5 13.4413 21.8161 12.8787 22.3787C12.3161 22.9413 12 23.7044 12 24.5V63.5C12 64.2956 12.3161 65.0587 12.8787 65.6213C13.4413 66.1839 14.2044 66.5 15 66.5H57C57.7956 66.5 58.5587 66.1839 59.1213 65.6213C59.6839 65.0587 60 64.2956 60 63.5V24.5C60 23.7044 59.6839 22.9413 59.1213 22.3787C58.5587 21.8161 57.7956 21.5 57 21.5Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.5 27.5V17C25.5 15.6211 25.7716 14.2557 26.2993 12.9818C26.8269 11.7079 27.6004 10.5504 28.5754 9.57538C29.5504 8.60036 30.7079 7.82694 31.9818 7.29927C33.2557 6.77159 34.6211 6.5 36 6.5C37.3789 6.5 38.7443 6.77159 40.0182 7.29927C41.2921 7.82694 42.4496 8.60036 43.4246 9.57538C44.3996 10.5504 45.1731 11.7079 45.7007 12.9818C46.2284 14.2557 46.5 15.6211 46.5 17V27.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </CardTitle>
                  <CardDescription className="font-Ubuntu pb-2 font-bold text-[32px] text-[#fff]">
                    PacaMarket
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-Ubuntu pb-1 font-normal text-[20px] text-[#FFFFFF80] ">
                  PacaMarket offers cutting-edge AI solutions. Discover, buy,
                  and integrate AI models, tools, and services from global
                  experts.
                </CardContent>
                <CardFooter className="flex justify-between">
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.72 21.5C6.72 13.604 13.104 7.22 21 7.22C28.896 7.22 35.28 13.604 35.28 21.5C35.28 29.396 28.896 35.78 21 35.78C13.104 35.78 6.72 29.396 6.72 21.5ZM33.6 21.5C33.6 14.528 27.972 8.9 21 8.9C14.028 8.9 8.4 14.528 8.4 21.5C8.4 28.472 14.028 34.1 21 34.1C27.972 34.1 33.6 28.472 33.6 21.5Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M19.572 28.472L26.544 21.5L19.572 14.528L20.748 13.352L28.896 21.5L20.748 29.648L19.572 28.472Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M27.72 20.66V22.34H13.44V20.66H27.72Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </svg>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center  justify-center">
        <div className="flex flex-col items-center  justify-center">
          <div className="flex flex-col">
            <svg
              width="46"
              height="50"
              viewBox="0 0 46 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3515 21.2065V17.812L2.86548 33.436L5.68648 32.1805L12.3515 21.2065Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M43.1345 33.436L33.6485 17.812V21.2065L40.3135 32.1805L43.1345 33.436Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M14.1185 14.9135V18.308V25.593V35.079L9.60798 32.351L1.25348 36.0865L21.574 48.347V2.65302L14.1185 14.9135Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M36.392 32.351L31.8815 35.079V25.593V18.308V14.9135L24.426 2.65302V48.347L44.7465 36.0865L36.392 32.351Z"
                fill="white"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <div className="flex font-Ubuntu text-[16px] text-[#FFFFFF33]">
            © 2024 Alpaca Network. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
