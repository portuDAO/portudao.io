import { keyframes } from "@emotion/react";
import { Dialog } from "@reach/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import tw, { styled } from "twin.macro";
import getConfig from "next/config";

import { Context } from "../helpers/store/Store";

interface Props {
  light?: boolean;
}

const navButtonVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.05 },
};

export default function Navbar({ light }: Props) {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [state, dispatch] = useContext(Context);
  const { publicRuntimeConfig } = getConfig();

  const { pageIndex, fullpageApi } = state;

  const handleCloseMenu = (section: string) => {
    toggleMenuOpen(false);

    fullpageApi.moveTo(section);
  };

  return (
    <header
      id="header-menu"
      css={[light ? tw`text-dark-green` : tw`text-white`]}
    >
      <MenuButton
        onClick={toggleMenuOpen}
        css={[
          tw`fixed top-0 right-0 z-50 px-3 py-1 mt-8 mr-6 md:mr-20 lg:hidden rounded-3xl focus:outline-none focus:shadow-inner`,
          light ? tw`text-dark-green` : tw`text-white`,
        ]}
      >
        <svg
          tw="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </MenuButton>

      <div
        css={[
          tw`z-30 px-6 py-2 md:px-0 flex justify-center top-0 right-0 left-0 absolute`,
          pageIndex !== 0 && tw`bg-black`,
        ]}
      >
        <nav tw="hidden lg:block">
          <ul tw="hidden text-xs tracking-wider lg:flex lg:items-center">
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 0 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(1)}
            >
              <Link href="#home" data-menuanchor="home">
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 1 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(2)}
            >
              <Link href="#membership" data-menuanchor="membership">
                Membership
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 2 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(3)}
            >
              <Link href="#missao" data-menuanchor="missao">
                Missão
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 3 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(4)}
            >
              <Link href="#sobre" data-menuanchor="sobre">
                Sobre
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
              onClick={() => fullpageApi.moveTo(1)}
            >
              <Link href="/" passHref>
                <img
                  loading="lazy"
                  width="108"
                  height="72"
                  src={`${publicRuntimeConfig.basePath}icons/logo.svg`}
                  alt="portuDAO logo"
                />
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 4 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(5)}
            >
              <Link href="#roadmap" data-menuanchor="roadmap">
                Roadmap
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 5 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(6)}
            >
              <Link href="#incubadora" data-menuanchor="incubadora">
                Incubadora
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 6 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(7)}
            >
              <Link href="#eventos" data-menuanchor="eventos">
                Eventos
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 7 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(8)}
            >
              <Link href="#academia" data-menuanchor="academia">
                Academia
              </Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              css={[
                tw`px-2 py-1 cursor-pointer xl:px-4 text-green hover:text-white`,
                pageIndex === 8 && tw`text-white`,
              ]}
              onClick={() => fullpageApi.moveTo(9)}
            >
              <Link href="#portuswap" data-menuanchor="portuswap">
                Portuswap
              </Link>
            </motion.li>
          </ul>
        </nav>

        <Dialog
          aria-label="Mobile menu"
          isOpen={menuOpen}
          tw="fixed inset-0 z-50 w-full h-full text-white bg-dark-green"
        >
          <MobileMenu tw="absolute inset-0">
            <button
              type="button"
              tw="absolute right-0 z-50 p-6 text-white cursor-pointer focus:outline-none"
              onClick={() => toggleMenuOpen(false)}
            >
              <svg
                tw="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav>
              <ul tw="flex flex-col items-center mt-40 text-3xl">
                <li tw="p-2 px-4" onClick={() => handleCloseMenu("home")}>
                  <Link href="#home" data-menuanchor="home">
                    Home
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("membership")}
                >
                  <Link href="#membership" data-menuanchor="membership">
                    Membership
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("missao")}
                >
                  <Link href="#missao" data-menuanchor="missao">
                    Missão
                  </Link>
                </li>
                <li tw="p-2 px-4 mt-4" onClick={() => handleCloseMenu("sobre")}>
                  <Link href="#sobre" data-menuanchor="sobre">
                    Sobre
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("roadmap")}
                >
                  <Link href="#roadmap" data-menuanchor="roadmap">
                    Roadmap
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("incubadora")}
                >
                  <Link href="#incubadora" data-menuanchor="incubadora">
                    Incubadora
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("eventos")}
                >
                  <Link href="#eventos" data-menuanchor="eventos">
                    Eventos
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("academia")}
                >
                  <Link href="#academia" data-menuanchor="academia">
                    Academia
                  </Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu("portuswap")}
                >
                  <Link href="#portuswap" data-menuanchor="portuswap">
                    Portuswap
                  </Link>
                </li>
              </ul>
            </nav>
          </MobileMenu>
        </Dialog>
      </div>
    </header>
  );
}

const MenuButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
`;

const fadeAndslideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MobileMenu = styled.aside`
  transform: translateX(100vw);
  animation: ${fadeAndslideIn} 0.4s forwards;
`;
