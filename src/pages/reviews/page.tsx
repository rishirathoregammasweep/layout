import ChartAreaGradient from './components/chart-area-gradient'

const Page = () => {
  return (
    <div className="space-y-2 px-8 pb-8 pt-2">
        <ChartAreaGradient />
        <div className='grid grid-cols-3 gap-2'>
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <ChartAreaGradient key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Page