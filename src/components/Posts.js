import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderList = () => {
        return _.map(this.props.posts, (post) => {
            return (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <li className="list-group-item">{post.title}</li>
                </Link>
            )
        })
    }
    render() {
        if (!this.props.posts) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
    }
}
export default connect(mapStateToProps, { fetchPosts })(Posts);