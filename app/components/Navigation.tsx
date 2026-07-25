"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [dropdownStyle, setDropdownStyle] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateDropdownPosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setDropdownStyle({ top: rect.bottom + 4, left: rect.left });
  };

  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleScroll = () => updateDropdownPosition();
    const handleResize = () => updateDropdownPosition();
    const navEl = navRef.current;
    navEl?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      navEl?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="sticky top-0 z-50 isolate transform-gpu border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar"
      >
        <div className="flex justify-between items-center h-16 min-w-full gap-8">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Image
              preload={true}
              src="/images/mmicon.png"
              alt="Media Matrix Icon"
              width={32}
              height={32}
              unoptimized={true}
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
              Media Matrix
            </h1>
          </div>
          <div className="flex space-x-4 sm:space-x-8 flex-shrink-0">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => {
                  if (!isDropdownOpen) updateDropdownPosition();
                  setIsDropdownOpen((open) => !open);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1"
              >
                <span>Generate</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isClient &&
                isDropdownOpen &&
                dropdownStyle &&
                createPortal(
                  <div
                    ref={menuRef}
                    style={{ top: dropdownStyle.top, left: dropdownStyle.left }}
                    className="fixed z-[100] w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md shadow-lg"
                  >
                    <Link
                      href="/chat"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Chat
                    </Link>
                    <Link
                      href="/background"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Background
                    </Link>
                    <Link
                      href="/background-color"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Background Color
                    </Link>
                    <Link
                      href="/image-to-video"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Image to Video
                    </Link>
                  </div>,
                  document.body,
                )}
            </div>
            <Link
              href="/gallery"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
