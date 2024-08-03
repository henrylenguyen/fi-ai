import IconBxChevronUp from '@/assets/icons/chevUp'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import Loader from '@/components/layouts/loader'
import Cursor from '@/components/ui/cursor'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ScrollToTop from 'react-scroll-to-top'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading')
  }, [loading])

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <main className='font-proxima text-light min-h-screen w-full'>
              <Header />
              {children}
              <Footer />
              <ScrollToTop smooth component={<IconBxChevronUp className='rounded-full bg-secondary text-white' />} />
            </main>
            <Cursor />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default BaseLayout
