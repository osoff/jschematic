function Input({ title, descirption = "" }) {
  return (
    <div>
      <input placeholder={title} />
      <p>{descirption}</p>
    </div>
  );
}

export default Input;
