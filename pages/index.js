import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges.slice(0)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Commonwealth Chamber of Commerce </title>
        </Head>
        <Header />
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
