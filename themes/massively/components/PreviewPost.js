import React from 'react';
import Link from 'gatsby-link';

export default class PreviewPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <header>
          <span className="date">{this.props.post.publishDate}</span>
          <h2>
            <Link to={`/blog/${this.props.post.slug}`}>
              {this.props.post.title}
            </Link>
          </h2>
        </header>
        <img src={`${this.props.post.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
        <p>
          {this.props.post.excerpt}
        </p>
        <ul className="actions">
          <li>
            <Link to={this.props.post.slug} className="button">Full Story</Link>
          </li>
        </ul>
      </article>
    );
  }
}