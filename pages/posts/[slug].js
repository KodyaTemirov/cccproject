import * as React from "react";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import dynamic from "next/dynamic";
const GeneratePDF = dynamic(() => import("../../components/generatePDF"), { ssr: false });

import Tags from '../../components/tags'

export default function Post({ post, posts, preview }) {
  const ref = React.useRef();
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview} ref={ref} id={"content"}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage?.node}

            />

            <GeneratePDF html={ref} title={post.title} wordVersion={post.wordVersion} slug={post.slug} />

            <PostBody content={post.content} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
