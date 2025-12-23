import React from 'react'

const Uploadwindow = () => {
  return (
    <section className="w-full min-h-[320px] flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-[32px] font-semibold text-gray-600 mb-6">
        See the magic. Try now
      </h1>
        <div>
            <input type="file" name=""  id="upload2" hidden/>
            <label htmlFor='upload2'
                className="
                inline-flex items-center gap-2
                px-7 py-3.5
                text-[15px] font-medium text-white
                rounded-full
                bg-gradient-to-r from-violet-500 to-purple-500
                hover:shadow-[0_8px_24px_rgba(123,92,255,0.35)]
                hover:-translate-y-[1px]
                transition-all duration-200
                "
            >
                <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                >
                <path
                    d="M12 16V4M12 4L8 8M12 4L16 8M4 16V20H20V16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>

                Upload your image
            </label>
        </div>
    </section>
  )
}

export default Uploadwindow