import { keyframes } from "@emotion/react";
import { Dialog } from "@reach/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import tw, { styled } from "twin.macro";
import getConfig from "next/config";

interface Props {
  light?: boolean;
  handleGetStarted?: () => void;
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

const navButtonVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.05 },
};

export default function Navbar({ light, handleGetStarted }: Props) {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const { publicRuntimeConfig } = getConfig();

  return (
    <header css={[light ? tw`text-dark-green` : tw`text-white`]}>
      <MenuButton
        onClick={toggleMenuOpen}
        css={[
          tw`absolute right-0 z-30 px-3 py-1 mt-8 mr-6 md:mr-20 lg:hidden rounded-3xl focus:outline-none focus:shadow-inner`,
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

      <div tw="z-30 px-6 md:px-20 lg:px-3 mt-8 lg:w-8/12 flex items-center justify-between top-0 absolute">
        <Link href="/">
          <a>
            <div tw="my-auto cursor-pointer text-none">
              <img
                loading="lazy"
                tw="h-20"
                src={`${publicRuntimeConfig.basePath}img/logo.png`}
                alt="portuDAO logo"
              />
            </div>
          </a>
        </Link>

        <nav tw="hidden lg:block">
          <ul tw="hidden text-xs tracking-wider lg:flex lg:items-center">
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
            >
              <Link href="/">EVENTOS</Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
            >
              <Link href="/">GALERIA</Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
            >
              <Link href="/">GLOSSÁRIO</Link>
            </motion.li>
            <motion.li
              variants={navButtonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              tw="px-2 py-1 cursor-pointer xl:px-4"
            >
              <Link href="/">ESCOLA</Link>
            </motion.li>
          </ul>
        </nav>

        {/* button only on desktop */}
        <motion.button
          variants={navButtonVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          type="button"
          onClick={handleGetStarted}
          css={[
            tw`hidden px-8 py-3 tracking-wider border cursor-pointer lg:block rounded-3xl focus:outline-none focus:shadow-inner`,
            light ? tw`border-dark-green` : "",
          ]}
        >
          <p tw="text-xs">PARTICIPAR</p>
        </motion.button>
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
                <li tw="p-2 px-4">
                  <Link href="/">Eventos</Link>
                </li>
                <li tw="p-2 px-4 mt-4">
                  <Link href="/">Galeria</Link>
                </li>
                <li tw="p-2 px-4 mt-4">
                  <Link href="/">Glossário</Link>
                </li>
                <li tw="p-2 px-4 mt-4">
                  <Link href="/">Escola</Link>
                </li>
                <li tw="p-2 px-4 mt-4">
                  <Link href="/">Participar</Link>
                </li>
              </ul>
            </nav>
          </MobileMenu>
        </Dialog>
      </div>
    </header>
  );
}
