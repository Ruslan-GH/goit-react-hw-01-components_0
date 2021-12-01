import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(item => {
          return (
            <li class="item" key={item.id}>
              <span class="label">{item.label}</span>
              <span class="percentage">{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
