import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        console.log('I am a constructor from News');
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        console.log('componentDidMount');
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a3abaa4d5d8473189c03edfffa9d974&page=1&pageSize=$(this.props.pageSize)`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles:parsedData.articles,totalResults:parsedData.totalResults});
    }

    handlePreviousClick = async () => {
        console.log('Pre');
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a3abaa4d5d8473189c03edfffa9d974&page=${this.state.page - 1}&pageSize=$(this.props.pageSize)`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    handleNextClick = async () => {
        console.log('handleNextClick');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a3abaa4d5d8473189c03edfffa9d974&page=${this.state.page + 1}&pageSize=$(this.props.pageSize)`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            });
        }
    };

    render() {
        console.log('render');
        return (
            <div className="container my-3">
                <h2 className="text-center">Top HeadLines</h2>
                <div className="row my-4">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 44) : ''}
                                    desc={element.description ? element.description.slice(0, 88) : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-evenly">
                    <button type="button my-3" disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark">
                        &larr; Previous
                    </button>
                    <button disabled={this.state.page>= 2} type="button" onClick={this.handleNextClick} className="btn btn-dark">
                        Next &rarr;
                    </button>
                    {/* <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">
                        Next &rarr;
                    </button> */}
                </div>
            </div>
        );
    }
}

export default News;
