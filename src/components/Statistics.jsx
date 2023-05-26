import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
return (
<section className="statistics">
  {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
  {stats.map((stat, index) => (
    <li className="item" key={index} style={{ background: getRandomHexColor()}}>
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}%</span>
</li>
))}
</ul>
</section>
);
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
  PropTypes.shape({
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
