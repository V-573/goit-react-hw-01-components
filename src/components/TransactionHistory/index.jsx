import {
    TableRows,
    TableData,
    TransactionHistoryWrapper,
    Theaders1,
    TableRowsH,


}  from './Transaction.style.jsx';



const TransactionHistory = ({items}) => {



  return (
    <TransactionHistoryWrapper className="transaction-history">
      <thead>
        <TableRowsH>
                  <Theaders1>Type </Theaders1>
          <Theaders1 >Amount</Theaders1>
          <Theaders1 >Currency</Theaders1>
        </TableRowsH>
      </thead>
          <tbody>
              
              {items.map((datos, index) => (
                  
 <TableRows key={datos.id} $even={index % 2 === 0}>
                  
          <TableData>{datos.type}</TableData>
          <TableData>{datos.amount}</TableData>
          <TableData>{datos.currency}</TableData>
        </TableRows>
              

              ))
              
              
              }
             


      </tbody>
    </TransactionHistoryWrapper>
  );
};

export default TransactionHistory;
