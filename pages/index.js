import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import ustilStyles from '../styles/utils.module.css';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={ustilStyles.headingMd}>
        <p>Hey! I am Palak Sharma. A 3rd year CSE student bulding frontend. </p>
        <p>
          this is the sample website.
          <a href='https://nextjs.org/learn'>Our next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}