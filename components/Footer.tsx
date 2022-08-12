import getConfig from "next/config";
import { styled } from "twin.macro";

const Footer = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <footer tw="h-full flex flex-col justify-center items-center m-4 lg:m-0">
        <div tw="z-[-1]">
          <BGImg path={`${publicRuntimeConfig.basePath}img/bg-footer.png`} />
        </div>
        <h1 tw="text-4xl lg:text-6xl text-center text-white">
          Join our mailing list
        </h1>
        <div tw="w-full h-[54px] flex justify-center mt-20">
          <div tw="max-w-[300px] w-full">
            <input
              type="text"
              id="default-input"
              placeholder="Your email"
              tw="w-full h-full bg-input/60 text-gray-900 text-sm focus:ring-input focus:border-input block p-2.5 dark:bg-input/60 dark:placeholder-gray-600 dark:text-white dark:focus:ring-input dark:focus:border-input"
            />
          </div>
          <button tw="text-green bg-input-gray/80 hover:opacity-80 max-w-[140px] w-full">
            Submit
          </button>
        </div>
        <div tw="flex absolute bottom-24 lg:bottom-20 text-white/40">
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/facebook.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/discord.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/linkedin.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            {" "}
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/medium.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            {" "}
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/mail.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/twitter.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/youtube.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/instagram.svg`}
              alt="portuDAO logo"
            />
          </div>
          <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
            <img
              loading="lazy"
              width="36"
              height="36"
              src={`${publicRuntimeConfig.basePath}icons/telegram.svg`}
              alt="portuDAO logo"
            />
          </div>
        </div>
        <div tw="absolute bottom-10 text-white/40 text-center">
          {`©${new Date().getFullYear()} | portuDAO | All right reserved | `}
          <a tw="hover:text-white hover:cursor-pointer">Terms & Conditions</a>
          <a tw="hover:text-white hover:cursor-pointer">
            {` | Privacy Policy`}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const BGImg = styled.div`
  background: ${(props: { path: string }) => `url(${props.path}) no-repeat`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
