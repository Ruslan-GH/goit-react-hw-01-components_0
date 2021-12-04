import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(item => {
          return (
            <li className={s.item} key={item.id}>
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }),
  ),
};

export default Statistics;
