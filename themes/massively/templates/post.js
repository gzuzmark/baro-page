import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Template from '../layouts/index';

export default function PostTemplate(props) {
  console.log('LOOGGGGG POSTTT')
  console.log(props.data)
  const { contentfulBlogPost: post } = props.data;
  const { next, prev } = props.pathContext;
  return (
    <Template {...props}>
      <Post post={post} next={next} prev={prev} />
    </Template>
  );
}

export const pageQuery = graphql`

query BlogPostBySlug($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishDate(formatString: "MMMM Do, YYYY")
    heroImage {
      file {
        url
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
    tags
  }
}
`;
