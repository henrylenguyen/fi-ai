import AutoPlayVideo from '@/components/ui/autoplayVideo'
import Button from '@/components/ui/button'
import * as React from 'react'
import { Link } from 'react-router-dom'

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className='h-auto'>
      <div className='carousel relative'>
        {/* <div className='radial-1'></div>
        <div className='radial-2'></div>
        <div className='radial-3'></div> */}
        <div className='flex min-h-screen w-full justify-center lg:pt-[200px]'>
          <div className='flex flex-col items-center gap-14'>
            <h1 className='max-w-[800px] text-center text-[52px] font-semibold capitalize'>
              With AI, understand customers in-store with ease
            </h1>
            <Button className=''>
              <Link to='https://analysis.m.pro/' className='w-full h-full'>
                <span>Start</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='accurate-count'>
        <div className='container-wrapper flex flex-col gap-10'>
          <h1 className='mt-[100px] text-center text-[60px] font-semibold'>Accurate Count and Analyze</h1>
          <AutoPlayVideo
            source='https://img.m.pro/fiai-home.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
