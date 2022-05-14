import Head from 'next/head'

const OpenGraphHead = () => (
  <Head>
    <title>Ahmed Afify | Web Developer</title>
    <meta name="description" content="My personal Portfolio." />
    <meta property="og:title" content="Ahmed Afify | Web Developer" />
    <meta property="og:site_name" content="Ahmed Afify" />
    <meta property="og:url" content="https://kllawingco.netlify.app/" />
    <meta
      property="og:description"
      content="you found me?. Howdy! I am Ahmed Afify. Or you could call me Afify. That works too . . . I am a Web Developer"
    />
    <meta property="og:type" content="profile" />
    <meta property="og:image" content="%PUBLIC_URL%/main.png"></meta>
  </Head>
)
export default OpenGraphHead
