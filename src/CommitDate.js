function CommitDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="commit__date">
      <div style={{ display: "inline-block", margin: "0 5px" }}>{month}</div>
      <div style={{ display: "inline-block", margin: "0 5px" }}>{day}</div>
      <div style={{ display: "inline-block", margin: "0 10px" }}>{year}</div>
    </div>
  );
}
export default CommitDate;
