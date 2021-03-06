import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from './dist/components/youtube-api-search';
import SearchBar from './dist/components/search_bar';
import VideoList from './dist/components/video_list';
import VideoDetail from './dist/components/video_detail';

const API_KEY = 'AIzaSyDZLrKAvhr2nMcBFrNwBEqpTiiKHc1q600'; // REPLACE IT WITH YT API KEY

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          videos : [],
          selectedVideo : null
        };

        this.videoSearch('Front End Nerdery');

      }
      videoSearch(term) {
        YTSearch({key : API_KEY, term : term}, (videos) => {
            this.setState({
              videos : videos,
              selectedVideo : videos[0]
            })
        });
      }
      render() {
        return(
          <section>
            <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
              videos={this.state.videos}/>
          </section>
        );
      }
    },

    ReactDOM.render(<App />, document.querySelector('.container')),
  };
};