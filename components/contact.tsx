"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { Star } from "lucide-react";
import { useState } from "react";

const personalEmail = process.env.NEXT_PUBLIC_PERSONAL_MAIL || "";

export default function Contact() {
  const [state, handleSubmit] = useForm(personalEmail);
  const [rate, setRate] = useState<number>(5);

  const isDisbledRating = (value: number): boolean => rate < value;

  if (state.succeeded) {
    return (
      <>
        <p className="text-center text-lg text-white mt-10">
          Thanks for your message.
        </p>
        <p className="text-center text-lg text-white mb-40">
          Take a look to my <Link href="#" className="text-cyan-500"> projects </Link> while I respond to your message.
        </p>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1100px] mx-auto flex flex-col gap-6 p-6 bg-black text-gray-300 rounded-xl shadow-lg"
    >
      <div className="grid grid-cols-[0.4fr_0.6fr] 
        grid-rows-[0.2fr_100px] gap-2"
      >

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="
            w-full p-3 rounded-md bg-neutral-900 text-white
            border border-neutral-700 
            focus:outline-none focus:border-cyan-500
          "
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm"
        />
      </div>

      <div className="flex flex-col gap-2 row-span-2">
        <label htmlFor="message" className="text-sm font-semibold">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          className="
            w-full p-3 rounded-md bg-neutral-900 text-white
            border border-neutral-700 
            focus:outline-none focus:border-cyan-500
          "
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Rate my work</label>
        
        <div className="flex">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button 
              key={`rating-star-${rating}`}
              className={isDisbledRating(rating) ? "text-gray-400" : "text-yellow-200"} 
              onClick={ () => setRate(rating) }  
            ><Star /></button>
          ))}
        </div>
      </div>

    </div>

    <button
      type="submit"
      disabled={state.submitting}
      className="
        bg-cyan-500 text-black font-semibold 
        py-3 rounded-md 
        hover:bg-cyan-300 transition disabled:opacity-50
        flex justify-center items-center gap-2
      "
    >
      Send Message
    </button>
  </form>
  );
}
