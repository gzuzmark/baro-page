import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PreviewPost from '../components/PreviewPost';
import Template from '../layouts/index';

export default function Index(props) {
  const { edges: posts } = props.data.allContentfulBlogPost;

  return (
    <Template {...props}>
      <div>
        <div id="main">
        <section className="posts">
          {posts
            .filter(post => post.node.title.length > 0)
            .map(({ node: post }) => {
              return (
                <PreviewPost key={post.id} post={post} />
              );
            })}
          </section>
        </div>
      </div>
    </Template>
  );
}

export const pageQuery = graphql`  
query HomeQuery {
  allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          file {
            url
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;
