import React, { Component } from 'react';
import Result from './Results';
import Search from './Search';
export default class Beer extends Component {
  //当组件的基本结构加载到页面之后再加载数据
  componentDidMount() {
    this.loadBeers();
  }

  componentDidUpdate(prevProps) {
    const currentSearchTerm = this.props.match.params.searchTerm;
    const oldSearchTerm = prevProps.match.params.searchTerm;
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm);
    }
    console.log(currentSearchTerm);
    // this.loadBeers(currentSearchTerm);
  }
  state = {
    beers: [],
    loading: true
  };
  loadBeers = (searchTerm = 'hops') => {
    this.setState({
      loading: true
    });
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers)
      this.setState({
        beers: localBeers,
        loading: false
      })
      return
    }
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(data => {
        // console.log(data)
        const beers = data.data || [];
        this.setState({
          beers: data.data,
          loading: false
        });
        localStorage.setItem(
          `search-${searchTerm}`,
          JSON.stringify(this.state.beers)
        );
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className="wrapper">
        <Search />
        <Result beers={this.state.beers} loading={this.state.loading} />
      </div>
    );
  }
}
