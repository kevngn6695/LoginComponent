function heading(props) {
  return (
    <header className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
}
