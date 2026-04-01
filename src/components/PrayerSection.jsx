export default function PrayerSection({ prayerPoints }) {
  return (
    <div className="bg-[#1C2B3A] rounded-2xl p-5 shadow-md">
      {prayerPoints.map((point, index) => (
        <div key={index}>
          <div className="flex gap-4 py-3">
            <div className="w-7 h-7 rounded-full bg-[#D4A853] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#0D1B2A] text-xs font-bold">{index + 1}</span>
            </div>
            <p className="text-[#F5EDD6] text-sm leading-6">{point}</p>
          </div>
          {index < prayerPoints.length - 1 && (
            <div className="h-px bg-[rgba(212,168,83,0.15)] ml-11" />
          )}
        </div>
      ))}
      <p className="text-[#A89880] italic text-xs text-center mt-4">
        You can pray these out loud, one at a time.
      </p>
    </div>
  )
}
