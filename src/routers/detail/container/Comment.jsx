import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScoreDistribute from '../components/ScoreDistribute'
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import request from '../../../helpers/request'
import { async } from 'q';


class Comment extends Component {

    state = {
        tags: [],
        comments: [],
        current: '' //当前选中标签
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const { tags, list } = await request('/comment')

        this.setState({
            tags,
            comments: list,
            current: tags[0] ? tags[0].text : ''
        })
    }

    changeTag = value => {
        this.setState({
            current: value
        })
    }

    toggleZan = (id) => {
        this.setState((prevState) => ({
            comments:prevState.comments.map(comment => {
                if(comment.id == id){
                    return {
                        ...comment,
                        isZan:!comment.isZan,
                        zan:comment.isZan ? --comment.zan : ++comment.zan
                    }
                }
                return {...comment}
            })
        }))
    }

    render() {
        const { tags, comments, current } = this.state
        const filterComments = comments.filter(comment => comment.tag === current)

        return (
            <div className="mComment">
                <ScoreDistribute />
                <div style={{ marginTop: 16 }}>
                    <TagList data={tags} current={current} onClick={this.changeTag} />
                </div>
                <div style={{ marginTop: 16 }}>
                    <CommentList data={filterComments} onClickZan={this.toggleZan} />
                </div>
            </div>
        )
    }

}

export default Comment;