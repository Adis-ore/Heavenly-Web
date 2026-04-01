export default function StoryCard({ title, reference, summary }) {
  return (
    <div className="bg-[#1C2B3A] rounded-2xl p-5 shadow-md">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-display text-[#D4A853] text-base font-bold leading-snug">{title}</h3>
          <p className="text-[#A89880] text-xs mt-1">{reference}</p>
        </div>
        <svg className="w-5 h-5 text-[#D4A853] flex-shrink-0 ml-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <p className="text-[#F5EDD6] text-sm leading-6">{summary}</p>
    </div>
  )
}
