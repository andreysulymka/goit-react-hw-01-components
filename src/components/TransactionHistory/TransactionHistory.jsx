import { Table, Head, Body } from "./TransactionHistory.styled"
import PropTypes from 'prop-types';

export { TransactionHistory};

function TransactionHistory({ items}) {
    return <Table>
  <thead>
    <tr>
      <Head>Type</Head>
      <Head>Amount</Head>
      <Head>Currency</Head>
    </tr>
  </thead>

        
  <tbody>
   {items.map((item) => {
                return <Body key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </Body>
   })}
            </tbody>
</Table>
}
TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
    
};