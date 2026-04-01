import VerseCard from '../components/VerseCard'
import StoryCard from '../components/StoryCard'
import PrayerSection from '../components/PrayerSection'
import CategoryBadge from '../components/CategoryBadge'

function SectionHeader({ title }) {
  return (
    <h2 className="font-display text-xl text-[#D4A853] mt-10 mb-4 tracking-wide">
      {title}
    </h2>
  )
}

function CategorySection({ category }) {
  return (
    <div>
      <SectionHeader title="Stories From Scripture" />
      <div className="space-y-3">
        {category.stories.map((story, i) => (
          <StoryCard key={i} {...story} />
        ))}
      </div>

      <SectionHeader title="Scriptures For This Season" />
      <div className="space-y-3">
        {category.verses.map((verse, i) => (
          <VerseCard key={i} {...verse} />
        ))}
      </div>

      <SectionHeader title="A Word For You" />
      <div className="bg-[#1C2B3A] rounded-2xl overflow-hidden flex shadow-lg">
        <div className="w-1 bg-[#D4A853] flex-shrink-0" />
        <p className="p-5 text-[#F5EDD6] italic text-base leading-relaxed">{category.encouragement}</p>
      </div>

      <SectionHeader title="Prayers You Can Pray" />
      <PrayerSection prayerPoints={category.prayerPoints} />

      <SectionHeader title="Speak This Over Yourself" />
      <div className="bg-[#1C2B3A] rounded-2xl p-6 text-center shadow-lg">
        <span className="font-display text-5xl text-[#D4A853] opacity-60 leading-none">"</span>
        <p className="font-display text-lg text-[#D4A853] leading-8 mt-1 mb-1">{category.declaration}</p>
        <span className="font-display text-5xl text-[#D4A853] opacity-60 leading-none">"</span>
      </div>
    </div>
  )
}

export default function ResultPage({ data, onBack }) {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <div className="max-w-2xl mx-auto px-5 py-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#D4A853] text-sm mb-8 hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Category badges */}
        <p className="text-[#A89880] italic text-sm mb-3">Your heart may be carrying...</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {data.categories.map(cat => (
            <CategoryBadge key={cat.id} title={cat.title} />
          ))}
        </div>

        {/* Categories */}
        {data.categories.map((category, index) => (
          <div key={category.id}>
            {data.categories.length > 1 && (
              <div className="border-t border-[rgba(212,168,83,0.2)] pt-8 mt-6">
                <h2 className="font-display text-2xl text-[#F0C97A]">{category.title}</h2>
              </div>
            )}
            <CategorySection category={category} />
            {index < data.categories.length - 1 && <div className="h-6" />}
          </div>
        ))}

        {/* Pray again button */}
        <button
          onClick={onBack}
          className="w-full mt-12 bg-[#D4A853] text-[#0D1B2A] font-display font-bold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Bring Another Concern
        </button>
      </div>
    </div>
  )
}
