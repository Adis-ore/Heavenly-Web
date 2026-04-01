export default function CrisisOverlay({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-[#0D1B2A] z-50 overflow-y-auto">
      <div className="max-w-xl mx-auto px-5 py-16 flex flex-col items-center text-center">
        <svg className="w-14 h-14 text-[#D4A853] mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <h1 className="font-display text-3xl text-[#D4A853] mb-5">You Are Not Alone</h1>
        <p className="text-[#F5EDD6] text-base leading-7 mb-8">{data.message}</p>

        <div className="w-full space-y-4 mb-10 text-left">
          {data.verses.map((verse, i) => (
            <div key={i} className="border-l-2 border-[#D4A853] pl-4">
              <p className="font-display text-[#D4A853] text-sm mb-1">{verse.reference}</p>
              <p className="text-[#F5EDD6] italic text-sm leading-6">{verse.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => alert('Please reach out to a pastor, counsellor, or trusted family member right now. You do not have to carry this alone.')}
          className="w-full bg-[#D4A853] text-[#0D1B2A] font-display font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-opacity mb-4"
        >
          Talk To Someone
        </button>

        <button
          onClick={onClose}
          className="text-[#A89880] text-sm underline hover:text-[#F5EDD6] transition-colors"
        >
          Back to app
        </button>
      </div>
    </div>
  )
}
