"use client";

import {
  Button,
  Dropdown,
  Header,
  Separator,
  Label,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@heroui/react";

import {
  Bars,
  House,
  SquarePlus,
  LayoutList,
  BookOpen,
  Person,
  PersonPlus,
  ArrowRightFromSquare,
} from "@gravity-ui/icons";

import Link from "next/link";
import Image from "next/image";
import NavLink from "../ui/NavLink";

const isLoggedIn = false;

const user = {
  name: "X",
  image: null,
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full my-3">
      <div className="relative rounded-full shadow-md border border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 text-xl font-bold text-[#072AC8]">
              <Image
                src="/assets/logo.png"
                alt="StudyNook Logo"
                width={25}
                height={25}
              />
              <h2>StudyNook</h2>
            </div>
          </Link>

          {/*Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <NavLink href="/" className="hover:text-[#072AC8]">
              Home
            </NavLink>
            <NavLink href="/rooms" className="hover:text-[#072AC8]">
              Rooms
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink href="/add-rooms" className="hover:text-[#072AC8]">
                  Add Room
                </NavLink>
                <NavLink href="/my-listings" className="hover:text-[#072AC8]">
                  My Listings
                </NavLink>
                <NavLink href="/my-bookings" className="hover:text-[#072AC8]">
                  My Bookings
                </NavLink>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <AvatarRoot size="sm">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </AvatarRoot>
                  <span className="text-sm font-medium text-slate-700">
                    {user.name}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="flex items-center gap-1 bg-[#072AC8]"
                  // TODO: better-auth signOut()
                >
                  <ArrowRightFromSquare className="size-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="bg-[#072AC8]">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* small device */}
          <div className="lg:hidden flex items-center">
            <Dropdown>
              <Button isIconOnly aria-label="Menu" variant="ghost">
                <Bars className="size-5 text-slate-700" />
              </Button>
              <Dropdown.Popover className="min-w-55">
                <Dropdown.Menu>
                  {isLoggedIn && (
                    <>
                      <Dropdown.Section>
                        <Header>
                          <div className="flex items-center gap-2 py-1">
                            <AvatarRoot size="sm">
                              <AvatarImage src={user.image} alt={user.name} />
                              <AvatarFallback>
                                {user.name.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </AvatarRoot>
                            <span className="text-sm font-medium text-slate-700">
                              {user.name}
                            </span>
                          </div>
                        </Header>
                      </Dropdown.Section>
                      <Separator />
                    </>
                  )}

                  <Dropdown.Section>
                    <Header>Navigation</Header>
                    <Dropdown.Item href="/">
                      <div className="flex items-center gap-2">
                        <House className="size-4 shrink-0 text-muted" />
                        <Label>Home</Label>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="/rooms">
                      <div className="flex items-center gap-2">
                        <BookOpen className="size-4 shrink-0 text-muted" />
                        <Label>Rooms</Label>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Section>

                  {isLoggedIn && (
                    <>
                      <Dropdown.Section>
                        <Dropdown.Item href="/add-rooms">
                          <div className="flex items-center gap-2">
                            <SquarePlus className="size-4 shrink-0 text-muted" />
                            <Label>Add Room</Label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="/my-listings">
                          <div className="flex items-center gap-2">
                            <LayoutList className="size-4 shrink-0 text-muted" />
                            <Label>My Listings</Label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="/my-bookings">
                          <div className="flex items-center gap-2">
                            <BookOpen className="size-4 shrink-0 text-muted" />
                            <Label>My Bookings</Label>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Section>
                      <Separator />
                      <Dropdown.Section>
                        <Dropdown.Item variant="danger">
                          <div className="flex items-center gap-2">
                            <ArrowRightFromSquare className="size-4 shrink-0 text-danger" />
                            <Label>Logout</Label>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Section>
                    </>
                  )}

                  {!isLoggedIn && (
                    <>
                      <Separator />
                      <Dropdown.Section>
                        <Header>Account</Header>
                        <Dropdown.Item href="/login">
                          <div className="flex items-center gap-2">
                            <Person className="size-4 shrink-0 text-muted" />
                            <Label>Login</Label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="/sign-up">
                          <div className="flex items-center gap-2">
                            <PersonPlus className="size-4 shrink-0 text-muted" />
                            <Label>Sign Up</Label>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Section>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
