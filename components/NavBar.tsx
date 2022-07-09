import { keyframes } from "@emotion/react";
import { Dialog } from "@reach/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import tw, { styled } from "twin.macro";

import { Context } from "../helpers/store/Store";

interface Props {
  light?: boolean;
}

interface IConditionElement {
  isWhite: boolean;
  index: number;
  text: string;
  onClick: () => void;
}

const navButtonVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.05 },
};

export default function Navbar({ light, pageRefs }: Props) {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [state, dispatch] = useContext(Context);

  const { pageIndex, fullpageApi } = state;

  const handleCloseMenu = (ref) => {
    toggleMenuOpen(false);

    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <header css={[light ? tw`text-dark-green` : tw`text-white`]}>
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

      <div tw="z-30 px-6 md:px-0 mt-8 flex justify-center top-0 right-0 left-0 bottom-0 absolute">
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
              <Link href="/">Home</Link>
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
              <Link href="/">Membership</Link>
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
              <Link href="/">Missão</Link>
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
              <Link href="/">Sobre</Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
              onClick={() => fullpageApi.moveTo(1)}
            >
              <Link href="/" passHref>
                <Image
                  width="108"
                  height="72"
                  src="/icons/logo.svg"
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
              <Link href="/">Roadmap</Link>
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
              <Link href="/">Incubadora</Link>
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
              <Link href="/">Eventos</Link>
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
              <Link href="/">Academia</Link>
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
                <li tw="p-2 px-4" onClick={() => handleCloseMenu(pageRefs[0])}>
                  <Link href="/">Home</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[1])}
                >
                  <Link href="/">Membership</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[2])}
                >
                  <Link href="/">Missão</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[3])}
                >
                  <Link href="/">Sobre</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[4])}
                >
                  <Link href="/">Roadmap</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[5])}
                >
                  <Link href="/">Incubadora</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[6])}
                >
                  <Link href="/">Eventos</Link>
                </li>
                <li
                  tw="p-2 px-4 mt-4"
                  onClick={() => handleCloseMenu(pageRefs[7])}
                >
                  <Link href="/">Academia</Link>
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
