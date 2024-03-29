import React from 'react';
import PropTypes from 'prop-types';
import './Index.css'
import LineLink from '../../components/LineLink'
import TabMenu from '../../components/TabMenu'

const user =() =>{

   return (
   <div className="user">
       <div className="user__top">
           <div className="tOperator">
               <div className="tOperator__icon tOperator__icon--setting" />
               <div className="tOperator__icon tOperator__icon--message" />
           </div>
           <div className="user__info">
           <div className="user__avatar" style={{backgroundImage:'url(/source/avatar.jpeg)'}} />
           <div className="user__detail">
               <div className="user__name">张正好</div>
               <div>
                   <span className="user__fellow">关注 100</span>
                   <span className="user__fans">被关注 10</span>
               </div>
               <div className="user__level">黄金会员</div>
           </div>
       </div>
       </div>
       <div className="user__content">
           <LineLink title="收藏的电影" extra="20" href="#" />
           <LineLink title="看过的电影" extra="20" href="#" />
       </div>
       <TabMenu current="user"/>
   </div>
  )
 }



export default user;