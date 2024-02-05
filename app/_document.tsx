'use client'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { SWRConfig } from 'swr/_internal'
import axios from 'axios'

//const BASE_URL = 'https://dummyjson.com'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL 

const axiosInstance = axios.create({ baseURL: BASE_URL })


axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  },
)

type Props = {
  children: React.ReactNode
}

const ClientDocument = ({ children }: Props) => {
  const fetcher = (url: string) => axiosInstance(url).then((res) => res)
  const swrConfig = {
    fetcher: fetcher,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    shouldRetryOnError: false,
  }
  return (
    <SWRConfig value={{ ...swrConfig }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </SWRConfig>
  )
}
export default ClientDocument
