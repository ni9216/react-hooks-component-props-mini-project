function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let minutesToRead = "";
  if (minutes < 30) {
    minutesToRead = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    minutesToRead = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
