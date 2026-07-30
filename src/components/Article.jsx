
function Article({ title, date = 0, preview }) {
  const formattedDate =
    typeof date === "string"
      ? date
      : new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;