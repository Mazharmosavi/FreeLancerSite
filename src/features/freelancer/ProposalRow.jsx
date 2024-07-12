import truncateTitle from "../../utils/truncateTitle";
import Table from "../../ui/Table";

const statusStyle = [
    {
        label:"رد شده",
        className:"badge--danger",
    },
    {
        label:"در انتظار تائید",
        className:"badge--secondary",
    },
    {
        label:"تائید شده",
        className:"badge--success"
    },
]
function TableRow({ proposal, index }) {
  return (
    <Table.row key={proposal._id}>
      <td>{index + 1}</td>
      <td>{truncateTitle(proposal.description, 30)}</td>
      <td>{proposal.duration}روز</td>
      <td>{proposal.price}</td>
      <td><span className={`badge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].label}</span></td>
    </Table.row>
  );
}

export default TableRow;
