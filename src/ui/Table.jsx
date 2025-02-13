function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-auto">
      <table>{children}</table>
    </div>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.header = TableHeader;
Table.body = TableBody;
Table.row = TableRow;
