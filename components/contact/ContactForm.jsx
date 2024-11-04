"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2";

const CommonContact = ({ condition }) => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Submit the form immediately
    form.current.submit();
    
    // Display success message after form submission
    const isDarkMode = document.documentElement.classList.contains("dark");
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your message has been sent successfully.",
      background: isDarkMode ? "rgb(17 17 17)" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      customClass: {
        popup: isDarkMode ? "swal2-dark-popup" : "",
        title: "swal2-title",
        html: "swal2-html-container",
        icon: "swal2-icon",
        confirmButton: "swal2-confirm"
      },
      showConfirmButton: false, // Hide the OK button
      timer: 2000,  // Auto-hide after 2 seconds
      timerProgressBar: true,
      willOpen: () => {
        const popup = Swal.getPopup();
        popup.style.border = isDarkMode ? "2px solid rgb(33 36 37 / var(--tw-border-opacity))" : "2px solid rgb(33 36 37 / var(--tw-border-opacity))"; // Set border color
      }
    });

    // Clear the form fields
    form.current.reset();
  };

  return (
    <div
      className={`${
        condition
          ? "mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2"
          : "dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4"
      } bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]`}
    >
      <h3 className="text-4xl">
        <span className="text-gray-lite dark:text-[#A6A6A6]">
          I&apos;m always open to discussing product
        </span>
        <br />
        <span className="font-semibold dark:text-white">
          design work or partnerships.
        </span>
      </h3>

      <form 
        ref={form} 
        id="myForm"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3uI_C0d775tQyk6yeLwUdvj7f1ZQt_mbksgJg2SnCDiMD2g/formResponse"
        method="POST" 
        target="hidden_iframe" 
        onSubmit={handleFormSubmit}
      >
        {/* Name input */}
        <div className="relative z-0 w-full mt-[40px] mb-8 group">
          <input
            type="text"
            id="name"
            name="entry.1239197453"
            className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Name *
          </label>
        </div>

        {/* Email input */}
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="entry.867592170"
            className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
            placeholder=" "
            id="user_email"
            required
          />
          <label
            htmlFor="user_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email *
          </label>
        </div>

        {/* Message input */}
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="entry.1645811488"
            className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
            placeholder=" "
            id="message"
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Message *
          </label>
        </div>

        <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
          {/* Submit button */}
          <input
            type="submit"
            className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white"
            value="Submit"
          />
        </div>
      </form>

      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  );
};

export default CommonContact;
