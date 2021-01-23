import Head from 'next/head';
import Image from 'next/image'
import { Link } from 'react-scroll';
import About from '../components/About';
import Contact from '../components/Contact';

const siteTitle = 'Marco Marassi - Web Developer';
const siteDescription = 'Web Developer based in Bristol, UK, with experience in Laravel, PHP, ReactJS, JavaScript, AJAX, and SQL (MySQL and Postgres).';
const themeColour = '#007bff';

function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="d7oFhlVR10ggoJbGqVJZfu9YnpT30s2fxH_z1yLKuWw"
        />
        <meta name="description" content={siteDescription} />
        <meta name="author" content="Marco Marassi" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="/icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
        />
        <link rel="preload" as="image" href="/icon.png" />
        <link
            rel="preload"
            as="image"
            href="/images/bg-2-full.jpg"
            sizes="100vw"
            media="(orientation:landscape) and (min-width:1201px)"
        />
        <link
            rel="preload"
            as="image"
            href="/images/bg-2-1200w.jpg"
            sizes="100vw"
            media="(orientation:landscape) and (max-width:1200px) and (min-width:801px)"
        />
        <link
            rel="preload"
            as="image"
            href="/images/bg-2-900w.jpg"
            sizes="100vw"
            media="(orientation:landscape) and (max-width:800px) and (min-width:501px)"
        />
        <link
            rel="preload"
            as="image"
            href="/images/bg-2-600w.jpg"
            sizes="100vw"
            media="(orientation:landscape) and (max-width:500px)"
        />
        <link
            rel="preload"
            as="image"
            href="/images/bg-portrait-2.jpg"
            media="(orientation:portrait) and (max-width:500px)"
        />
        <meta name="msapplication-TileColor" content={themeColour} />
        <meta name="theme-color" content={themeColour} />
        <title>{siteTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Marco Marassi",
              "familyName": "Marassi",
              "givenName": "Marco",
              "gender": "Male",
              "nationality": "Italy",
              "jobTitle": "Back-end Web Developer",
              "knowsLanguage": [
                "it-IT",
                "en-GB",
                "es-ES",
                "fr-FR"
              ],
              "worksFor": {
                "name": "Simpleweb",
                "url": "https://simpleweb.co.uk"
              },
              "image": "/icon.png",
              "sameAs": [
                "https://www.linkedin.com/in/marco-marassi",
                "https://www.instagram.com/thtg88",
                "https://github.com/thtg88"
              ]
            })
          }}
        />
      </Head>
      <div className="root-container">
        <header
          id="top"
          className="header"
          title="Picture taken at: Cala Blanca, Ciutadella de Menorca, Spain."
        >
          <div className="text-vertical-center">
          <h1>Hi, I'm Marco Marassi.</h1>
          <h3>Web Developer by day, Sleeper by night.</h3>
          <p>What did you think I was? A superhero or something?</p>
          <div>
          <Image
            src="/icon.png"
            alt="Icon Logo"
            width={200}
            height={150}
            title="This looks like my face."
            className="img-fluid img-circle d-inline-block profile-icon"
          />
          </div>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="btn btn-dark btn-lg text-white"
            >
              But wait, there's more!
            </Link>
          </div>
        </header>
        <About name="about" />
        <Contact />
      </div>
    </>
  );
}

export default Home;
