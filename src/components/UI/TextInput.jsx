export const TextInput = ({ onChange, ...props }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search here for recipe"
        onChange={onChange}
        {...props} /*New*/
      />
    </div>
  );
};
