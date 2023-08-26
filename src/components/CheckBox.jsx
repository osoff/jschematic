function CheckBox({ title }) {
  return (
    <div>
      <label htmlFor="ids">{title}</label>
      <input id="ids" type="checkbox" />
    </div>
  );
}

export default CheckBox;
