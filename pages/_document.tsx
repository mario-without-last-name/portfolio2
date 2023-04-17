import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <meta name="description" content="PERN stack developer looking for a job"/>
        <meta name="keywords" content="Full Stack Web Deeloper, Freelancer, PERN developer" />
      </Head>
      <body className='bg-gradient-to-r from-yellow-400 to-yellow-900 dark:from-zinc-700 dark:to-zinc-800 dark:text-white'>
      {/* <body style={{ backgroundImage: "url('/background_dark.jpg')" }} className="relative"> */}
        <div className="relative z-10">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}