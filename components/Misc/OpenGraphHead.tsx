import Head from 'next/head'

const OpenGraphHead = () => (
  <Head>
    <title>Ahmed Afify | Web Developer</title>
    <meta name="description" content="My personal Portfolio." />
    <meta property="og:title" content="Ahmed Afify | Web Developer" />
    <meta property="og:site_name" content="Ahmed Afify" />
    <meta property="og:url" content="https://ahmedalian3.vercel.app/" />
    <meta
      property="og:description"
      content="Howdy! I am Ahmed Afify a Web Developer"
    />
    <meta property="og:type" content="profile" />
    <meta property="og:image" content="/main.png"></meta>
  </Head>
)
export default OpenGraphHead
