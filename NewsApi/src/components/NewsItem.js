import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl } = this.props
        return (
            <div key={newsUrl}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://icon-library.com/images/blank-document-icon/blank-document-icon-11.jpg"} className="card-img-top" alt="/" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <a href={newsUrl} rel='noferrer' className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>      
            </div>
        )
    }
}

export default NewsItem
