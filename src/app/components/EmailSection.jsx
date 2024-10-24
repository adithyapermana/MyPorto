"use client";
import React, { useState } from "react";
import instagramIcon from "../../../public/instagram-icon.svg";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-12 md:py-24 gap-4 relative px-4"
    >
      {/* Adjust the gradient for responsiveness */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-500 to-cyan-500 rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 z-0 blur-lg absolute top-[110%] sm:top-[90%] md:top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Text Section */}
      <div className="z-10">
        <h5 className="text-lg sm:text-xl font-bold text-[#00FFFF] my-2">Lets Connect</h5>
        <p className="text-sm sm:text-base text-[#9CCCCC] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/adittto_/profilecard/?igsh=aG8ybnNvZnBmeG90">
            <Image src={instagramIcon} alt="instagram Icon" width={30} height={30} />
          </Link>
          <a href="https://github.com/adithyapermana" aria-label="GitHub">
            <FaGithub size={30} className="text-white" />
          </a>
        </div>
      </div>

      {/* Email Form */}
      <div>
        {emailSubmitted ? (
          <p className="text-blue-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-[#00FFFF] block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#0A2A3E] border border-[#0F4F64] placeholder-[#B0D2D5] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="adithyapermana2121@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-[#00FFFF] block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#0A2A3E] border border-[#0F4F64] placeholder-[#B0D2D5] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-[#00FFFF] block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#0A2A3E] border border-[#0F4F64] placeholder-[#B0D2D5] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:bg-gradient-to-l text-white font-medium py-2 px-4 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
