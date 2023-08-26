function Select({ title, opt }) {
  return (
    <div>
      <span>{title}</span>
      <select>
        {opt.map((el, i) => (
          <option key={i}>{String(el)}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
