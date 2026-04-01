import { useState } from 'react'
import { fetchComfort } from '../api/comfort'
import CrisisOverlay from '../components/CrisisOverlay'

const MAX_LENGTH = 2000

const QUICK_PILLS = [
  { label: 'Debt & Lack', prompt: "I am really struggling financially. I have bills I cannot pay and I don't know how to get out of this debt." },
  { label: 'Fear & Worry', prompt: 'I am so anxious about my future and I cannot stop worrying about everything. My mind will not rest.' },
  { label: 'Grief', prompt: 'I lost someone very dear to me and the grief is overwhelming. I do not know how to keep going.' },
  { label: 'Heartbreak', prompt: 'My heart is broken. Someone I trusted and loved deeply has hurt me and I feel so lost.' },
  { label: "I'm Lost", prompt: 'I am at a crossroads and completely confused about which direction to go with my life. I need guidance.' },
  { label: 'Loneliness', prompt: 'I feel so alone. Nobody checks on me and I feel completely invisible and forgotten.' },
  { label: 'Sickness', prompt: 'I have been dealing with a serious illness and the diagnosis has changed everything. I need God to heal me.' },
  { label: 'Still Waiting', prompt: 'I have been waiting for years for a breakthrough and nothing is moving. I wonder if God still hears me.' },
]

export default function HomePage({ onResult }) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [crisisData, setCrisisData] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!message.trim() || loading) return
    setError('')
    setLoading(true)
    try {
      const data = await fetchComfort(message.trim())
      if (data.crisis) {
        setCrisisData(data)
      } else {
        onResult(data)
      }
    } catch {
      setError('Could not connect to the server. Please make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {crisisData && (
        <CrisisOverlay data={crisisData} onClose={() => setCrisisData(null)} />
      )}

      <div className="min-h-screen bg-[#0D1B2A] relative flex flex-col items-center">
        {/* Subtle gold glow */}
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#D4A853] opacity-[0.04] blur-[120px]" />
        </div>

        <div className="w-full max-w-2xl px-5 py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-6 h-6 text-[#D4A853]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              <h1 className="font-display text-3xl text-[#D4A853] tracking-wide">HeavenlyComfort</h1>
            </div>
            <p className="text-[#A89880] italic text-sm">What is weighing on your heart today?</p>
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-5">
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                maxLength={MAX_LENGTH}
                rows={8}
                placeholder="Tell God and tell us what is going on. You can write everything. Nothing is too heavy..."
                className="w-full bg-[#1C2B3A] border border-[rgba(212,168,83,0.5)] rounded-2xl p-5 text-[#F5EDD6] placeholder-[#6B7F8E] text-base leading-relaxed resize-none focus:outline-none focus:border-[#D4A853] transition-colors"
              />
              <span className="absolute bottom-3 right-4 text-[#6B7F8E] text-xs">
                {message.length}/{MAX_LENGTH}
              </span>
            </div>

            {error && (
              <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={!message.trim() || loading}
              className="w-full bg-[#D4A853] text-[#0D1B2A] font-display text-lg font-bold py-4 rounded-2xl transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Finding comfort...
                </>
              ) : (
                'Find Comfort & Prayer'
              )}
            </button>
          </form>

          <p className="text-center text-[#6B7F8E] text-xs mt-4">10 categories of life burdens covered</p>

          {/* Quick pills */}
          <div className="mt-8">
            <p className="text-[#A89880] text-xs italic mb-3">Quick topics — tap to fill:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_PILLS.map(pill => (
                <button
                  key={pill.label}
                  onClick={() => setMessage(pill.prompt)}
                  className="border border-[#D4A853] text-[#F5EDD6] text-xs px-3 py-1.5 rounded-full hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-colors"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
