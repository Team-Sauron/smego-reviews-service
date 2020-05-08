import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewHeading from './ReviewHeading';
import Sidebar from './Sidebar';
import Pictures from './Pictures';

const Thumbs = styled.span`
span {
  padding-left: 15px;
  color: transparent;
  transition: all 0.2s;
}
.up {
  text-shadow: ${(props) => (props.upvote ? '0 0 0 dodgerBlue' : '0 0 0 gray')};
}
.down {
  text-shadow: ${(props) => (props.downvote ? '0 0 0 red' : '0 0 0 gray')};
}
`;

const Accordian = styled.div`
  padding: ${(props) => (props.isOpen ? '1em 0' : '0')};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  line-height: 1em;
  height: ${(props) => (props.isOpen ? 'auto' : '4em')};
`;

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvote: false,
      downvote: false,
      isOpen: false,
    };

    this.handleThumbs = this.handleThumbs.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleThumbs(e) {
    const { upvote, downvote } = this.state;
    const { thumbs } = this.props;
    e.preventDefault();
    if (e.target.ariaLabel === 'thumbup') {
      if (!upvote) {
        thumbs.yes += 1;
      } else {
        thumbs.yes -= 1;
      }
      this.setState((prevState) => ({ upvote: !prevState.upvote }));
    } else {
      if (!downvote) {
        thumbs.no += 1;
      } else {
        thumbs.no -= 1;
      }
      this.setState((prevState) => ({ downvote: !prevState.downvote }));
    }
  }

  toggleShow() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      review, thumbs, user, pictures,
    } = this.props;
    const { isOpen, upvote, downvote } = this.state;
    return (
      <div className="review">
        <div>
          <ReviewHeading review={review} user={user} />
        </div>

        <div className="reviewWrapper">

          <div className="reviewText">
            <Accordian isOpen={isOpen}>
              <div>
                {review.text}
              </div>
            </Accordian>
            <button className="showMore" type="submit" onClick={this.toggleShow}>
              {isOpen ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="pic">
            <Pictures pictures={pictures} />
          </div>

          <div className="helpful">
            <div>Was this helpful?</div>

            <Thumbs upvote={upvote}>
              <span className="up" role="presentation" aria-label="thumbup" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
                👍
              </span>
              {thumbs.yes}
            </Thumbs>

            <Thumbs downvote={downvote}>
              <span className="down" role="presentation" aria-label="thumbdown" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
                👎
              </span>
              {thumbs.no}
            </Thumbs>
          </div>

          <div className="reviewRating">
            <Sidebar review={review} user={user} />
          </div>

        </div>
      </div>

    );
  }
}

export default Review;
