import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './LineLink.css'

const LineLink = ({href,title,extra}) => {

   return (
   <a href="" className="lineLink">
       <span className="lineLink__title">{title}</span>
       <span className="lineLink__extra">{extra}</span>
       <i className="lineLink__arrow" />
   </a>
  )
 }

LineLink.propTypes = {
    title:PropTypes.string.isRequired,
    extra:PropTypes.string,
    href:PropTypes.string.isRequired
}

export default LineLink;