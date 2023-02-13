import Gnb from '@/components/global/Gnb/Gnb';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import {ContentsStyled} from '../styles/ContentsStyled'
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ContentsStyled>
          <Gnb />
          <div className='ComponentContainer'>
            <Component {...pageProps} />
          </div>
        </ContentsStyled>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
