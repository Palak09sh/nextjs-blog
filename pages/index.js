import Head from 'next/head';
import Layout, {siteTitle} from '../pages/component/layout';
import ustilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    // returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop. 
    props: {
      allPostsData,
    },
}
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`{$ustilStyles.headingMd} ${ustilStyles.padding1px}`}  >
        <h2 className={ustilStyles.headingLg}>Blog</h2>
        <ul className={ustilStyles.list}>
          {allPostsData.map(({id,date,title})=> (
             <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        <p>Hey! I am Palak Sharma. A 3rd year CSE student bulding frontend. </p>
        <p>
          this is the sample website.
          <a href='https://nextjs.org/learn'>Our next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}