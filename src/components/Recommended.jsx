function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
        <div className="course-card">
          <img src="/images/c1.jpg" alt="Course1" />
          <p>2023 Python Data Visualisation Masterclass</p>
          <p>Col Steel</p>
          <p>4 ⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src="/images/c2.jpg" alt="Course2" />
          <p>Web Development Bootcamp 2025 | Advance</p>
          <p>Col Steel</p>
          <p>3 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src="/images/c3.jpg" alt="Course3" />
          <p>Master UI/UX Designing with Figma</p>
          <p>Col Steel</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src="/images/c4.jpg" alt="Course4" />
          <p>Basic to Advance Java Core Training</p>
          <p>Col Steel</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
