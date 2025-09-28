import Head from 'next/head';
import Layout, {siteTitle} from '../pages/component/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from './lib/posts';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`{$utilStyles.headingMd} ${utilStyles.padding1px}`}  >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
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
export async function getStaticProps() {
  const allPostsData =  getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };

}
