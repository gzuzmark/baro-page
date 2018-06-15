import React from 'react';
import Tags from './Tags';
import Link from 'gatsby-link';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <section className="post">
          <header className="major">
            <span className="date">{this.props.post.publishDate}</span>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.excerpt}</p>
          </header>
          <p
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: this.props.post.body.childMarkdownRemark.html }}
          />
          <Tags list={this.props.post.tags || []} />
          <div className="pagination">
            {this.props.prev &&
              <Link className="previous" to={this.props.prev.slug}>
                {this.props.prev.title}
              </Link>}
            {this.props.next &&
              <Link className="next" to={this.props.next.slug}>
                {this.props.next.title}
              </Link>}
          </div>
        </section>
      </div>
    );
  }
}