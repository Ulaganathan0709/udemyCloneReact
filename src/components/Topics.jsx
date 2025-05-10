

function Topics() {
    const topicList = [
  "Website", "JavaScript", "CSS", "MongoDB", "Azure", "AWS", "Docker", "GitHub", "React JS"
];
  return (
    <div className="topics">
      <h1 className="topics__title">Topics recommended for you</h1>
      <div className="topics__container">
        {topicList.map((topic, index) => (
          <p key={index}>{topic}</p>
        ))}
      </div>
    </div>
  );
}

export default Topics;