export default function VerseCard({ reference, text }) {
  return (
    <div className="bg-[#1C2B3A] rounded-2xl overflow-hidden flex shadow-md">
      <div className="w-0.5 bg-[#D4A853] flex-shrink-0" />
      <div className="p-5">
        <p className="font-display text-[#D4A853] text-sm font-bold mb-2">{reference}</p>
        <p className="text-[#F5EDD6] italic text-base leading-7">{text}</p>
      </div>
    </div>
  )
}
