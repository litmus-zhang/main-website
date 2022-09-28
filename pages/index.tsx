import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'

const Home: NextPage = () => {
  const link = "mailto: leetmus.design@gmail.com"
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
        <p>We develop solutions for </p>
         
          <h1 className='text-6xl font-bold my-0'>
            Redefining the future of Finance and Real Estate

          </h1>
          <a href={link}>
          <Button
          text='Contact Us'
          type='button'
          size='large'
          variant='primary'
          /> 
          </a>
         
        </div>
        
       
       
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/dynage-logo.svg" alt="dynage Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
