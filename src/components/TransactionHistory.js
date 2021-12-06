import propTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id}>
            <tr className={s.tr}>
              <td className={s.td}>{item.type}</td>
              <td className={s.td}>{item.amount}</td>
              <td className={s.td}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
