import { useState } from 'react'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

export default function App() {
  const [page, setPage] = useState('home')
  const [result, setResult] = useState(null)

  function handleResult(data) {
    setResult(data)
    setPage('result')
  }

  function handleBack() {
    setPage('home')
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#F5EDD6]">
      {page === 'home' && <HomePage onResult={handleResult} />}
      {page === 'result' && <ResultPage data={result} onBack={handleBack} />}
    </div>
  )
}
