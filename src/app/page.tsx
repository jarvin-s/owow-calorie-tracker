"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("colorful");
  const toggleTheme = () => {
    setTheme(theme === "colorful" ? "monotone" : "colorful");
  };

  return (
    <div
      className={`theme-${theme} min-h-screen flex flex-col items-center justify-center px-4`}
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="bg-[var(--bg-login)] w-[375px] h-[812px] overflow-hidden z-10 relative flex flex-col border-2 border-[var(--border-colour)] rounded-3xl">
        {theme === "colorful" && (
          <div className=" absolute -bottom-[350px] -right-[118px] w-[600px] h-full -z-10">
            <Image src={"/circle-bg.svg"} alt="background" fill />
          </div>
        )}
        <div className="flex-1 flex flex-col items-center justify-start pt-16">
          <h1 className="text-[var(--text-primary)] text-4xl font-bold mb-16 tracking-wider">
            FlowerMe
          </h1>

          <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 w-[320px] mx-auto">
            <h2 className="text-[var(--text-secondary)] text-2xl font-bold mb-8">
              Sign in
            </h2>

            <div className="mb-6">
              <label className="block text-[var(--text-secondary)] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full h-12 bg-[var(--input-bg)] rounded-lg px-4 text-[var(--text-secondary)] placeholder-gray-600"
                placeholder=""
              />
            </div>

            <div className="mb-8">
              <label className="block text-[var(--text-secondary)] text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full h-12 bg-[var(--input-bg)] rounded-lg px-4 text-[var(--text-secondary)] placeholder-gray-600"
                placeholder=""
              />
            </div>

            <Link
              href="/dashboard"
              className="w-full h-12 bg-[var(--bg-button)] text-white rounded-full font-medium text-lg mb-6 cursor-pointer flex items-center justify-center no-underline"
            >
              Sign in
            </Link>

            <button
              onClick={toggleTheme}
              className="w-full h-12 border-2 border-[var(--text-secondary)] text-[var(--text-secondary)] rounded-full font-medium text-lg mb-6 cursor-pointer flex items-center justify-center"
            >
              Switch to {theme === "colorful" ? "Monotone" : "Colorful"} Mode
            </button>

            <p className="text-center text-[var(--text-secondary)] text-sm">
              Already have an account?{" "}
              <Link
                href="/flipdots"
                className="hover:underline text-[var(--text-login)] font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
