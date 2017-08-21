import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatters';

const NULL_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';

const TxInfo = (props) => {
  const { tx } = props;
  return (
    <table className="u-full-width">
      <tbody>
        <tr>
          <td>Hash:</td>
          <td>{tx.hash}</td>
        </tr>
        {tx.blockHash !== NULL_HASH && <tr>
          <td>Block Hash:</td>
          <td><Link to={`/block/${tx.blockHash}`}>{tx.blockHash}</Link></td>
        </tr>}
        {tx.blockHash !== NULL_HASH && <tr>
          <td>Block Number:</td>
          <td><Link to={`/block/${tx.blockHash}`}>{tx.blockNumber}</Link></td>
        </tr>}
        {tx.blockHash !== NULL_HASH && <tr>
          <td>Transaction Index:</td>
          <td>{tx.transactionIndex}</td>
        </tr>}
        {tx.block && <tr>
          <td>Date:</td>
          <td>{formatTimestamp(tx.block.timestamp)}</td>
        </tr>}
        {tx.blockHash === NULL_HASH && <tr>
          <td>Block:</td>
          <td>Pending</td>
        </tr>}
        <tr>
          <td>From:</td>
          <td><Link to={`/account/${tx.from}`}>{tx.from}</Link></td>
        </tr>
        <tr>
          <td>To:</td>
          {tx.to && <td><Link to={`/account/${tx.to}`}>{tx.to}</Link></td>}
          {!tx.to && tx.receipt.contractAddress && <td>Contract created <Link to={`/contract/${tx.receipt.contractAddress}`}>{tx.receipt.contractAddress}</Link></td>}
          {!tx.to && !tx.receipt.contractAddress && <td>Contract creation faild</td>}
        </tr>
        <tr>
          <td>Gas:</td>
          <td>{tx.gas}</td>
        </tr>
        <tr>
          <td>Gas Price:</td>
          <td>{tx.gasPrice}</td>
        </tr>
        {tx.receipt && <tr>
          <td>Gas Used:</td>
          <td>{tx.receipt.gasUsed}</td>
        </tr>}
        <tr>
          <td>Nonce:</td>
          <td>{tx.nonce}</td>
        </tr>
        <tr>
          <td>Gas Price:</td>
          <td>{tx.gasPrice}</td>
        </tr>
        <tr>
          <td>Value:</td>
          <td>{tx.value}</td>
        </tr>
        <tr>
          <td>Input:</td>
          <td>{tx.input}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TxInfo;