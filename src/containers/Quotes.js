import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {

	renderQuoteCard = () => this.props.quotes.map((quote, idx) => <QuoteCard key={idx} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote}/>)

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
							*/}
							{this.renderQuoteCard()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		quotes: state.quotes
	}
}

const mapDispatchToProps = dispatch => ({
	removeQuote: id => dispatch(removeQuote(id)),
	upvoteQuote: id => dispatch(upvoteQuote(id)),
	downvoteQuote: id => dispatch(downvoteQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
