import ChartAreaGradient from './components/chart-area-gradient'
import ReviewsStats from './components/reviews-stats'

const Page = () => {
  return (
    <div className="space-y-2 px-8 pb-8 pt-2">
      <ReviewsStats />
      <div className='grid grid-cols-2 gap-2'>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <ChartAreaGradient key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Page