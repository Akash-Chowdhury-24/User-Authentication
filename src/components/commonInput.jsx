function CommonInput({type,placeholder,value,onChange,name}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "10px",
          padding: "0 10px",
          border: "1px solid #ccc",
          margin: '0%'
        }}
      />
    </div>
  );
}

export default CommonInput;