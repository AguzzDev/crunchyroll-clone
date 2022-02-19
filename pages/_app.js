import { wrapper } from 'store'
import MDXComponents from 'components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'

import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default wrapper.withRedux(MyApp)
