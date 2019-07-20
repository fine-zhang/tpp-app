import React from 'react';
import PropTypes from 'prop-types';
import './ScoreSummary.css'
import Star from '../../../components/Star'


const ScoreSummary = () => {
    return (
        <div className="scoreSummary">
            <div className="scoreSummary__top">
                <div className="summaryItem">
                    <div className="summaryItem__value">9.3 <Star value={9.3} /></div>
                    <div className="summaryItem__title">观众评分1213人</div>
                </div>
                <div className="summaryItem">
                    <div className="summaryItem__value">80%</div>
                    <div className="summaryItem__title">V淘推荐度</div>
                </div>
                <div className="summaryItem">
                    <div className="summaryItem__value">72821</div>
                    <div className="summaryItem__title">想看人数</div>
                </div>
            </div>
            <div className="summaryBtn">
                <button className="summaryBtn__item summaryBtn__item--want"><i /> 想看</button>
                <button className="summaryBtn__item summaryBtn__item--seen"><i /> 看过</button>
            </div>
        </div>
    );
};

ScoreSummary.propTypes = {

};



export default ScoreSummary;