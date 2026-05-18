"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { Button } from "@heroui/react";
import { MapPin } from "@gravity-ui/icons";

const isLoggedIn = true;

const Footer = () => {
  return (
    <footer className="w-full bg-[#072AC8] text-white relative mt-auto pt-16 pb-8 overflow-hidden rounded-t-4xl ">
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl">
                  <Image
                    src="/assets/logo.png"
                    alt="StudyNook Logo"
                    width={35}
                    height={35}
                  />
                </div>
                <h1 className="text-4xl font-bold">StudyNook</h1>
              </div>
            </Link>
            <p className="text-white/80  text-sm">
              Your premier campus study room booking companion. Discover,
              reserve, and focus in spaces tailored specifically for academic
              success and collaboration.
            </p>
            {/* social */}
            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#072AC8]"
              >
                <FaFacebook className="size-5" />
              </Link>
              <Link
                href="https://x.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#072AC8]"
              >
                <FaXTwitter className="size-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#072AC8]"
              >
                <FaLinkedinIn className="size-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#072AC8]"
              >
                <FaInstagram className="size-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links*/}
          <div>
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-supreme text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  About Us
                </Link>
              </li>

              {/* Private Routes merged inside Useful Links grid when logged in */}
              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      href="/add-rooms"
                      className="text-white/80 hover:text-white"
                    >
                      Add Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-listings"
                      className="text-white/80 hover:text-white hover:underline"
                    >
                      My Listings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-bookings"
                      className="text-white/80 hover:text-white hover:underline"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/rooms">
                      <Button
                        size="sm"
                        className="bg-[#FCF300] text-[#072AC8] hover:bg-amber-300 rounded-lg font-semibold"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link
                  href="info@studynook.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
                    <FaEnvelope className="size-4" />
                  </div>
                  <span className="hover:underline">info@studynook.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="+15550192834"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
                    <FaPhone className="size-4" />
                  </div>
                  <span className="hover:underline">+1 (555) 019-2834</span>
                </Link>
              </li>
              <li>
                <a className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
                    <MapPin className="size-4" />
                  </div>
                  <span>Dhaka, Bangladesh</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()} StudyNook. All rights reserved. Built
            with passion for seamless learning.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            <Link
              href="/privacy"
              className="hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
