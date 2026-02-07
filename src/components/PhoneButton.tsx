"use client";

import { useState } from "react";
import { Phone, Copy, Check, X } from "lucide-react";

const PHONE_NUMBER = "+48 123 456 789";
const PHONE_RAW = "+48123456789";

export default function PhoneButton() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(PHONE_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="group/phone inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-600 hover:shadow-lg hover:shadow-primary-500/10 active:scale-95 transition-all duration-300"
      >
        <Phone className="h-5 w-5 group-hover/phone:animate-[ring_0.5s_ease-in-out]" />
        {PHONE_NUMBER}
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-[fadeIn_0.15s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500 mb-5">
              <Phone className="h-7 w-7" />
            </div>

            <p className="text-sm text-gray-500 mb-2">Zadzwoń do nas</p>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">
              {PHONE_NUMBER}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Zadzwoń
              </a>
              <button
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    Skopiowano!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Kopiuj numer
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Pon-Pt 8:00-20:00 &middot; Sob 9:00-14:00
            </p>
          </div>
        </div>
      )}
    </>
  );
}
