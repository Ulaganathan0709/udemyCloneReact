// src/components/PopularSessions.jsx

function PopularSessions() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
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

        <div className="course-card">
          <img src="/images/c4.jpg" alt="Course5" />
          <p>Basic to Advance Java Core Training</p>
          <p>Col Steel</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src="/images/c4.jpg" alt="Course6" />
          <p>Basic to Advance Java Core Training</p>
          <p>Col Steel</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src="/images/c4.jpg" alt="Course7" />
          <p>Basic to Advance Java Core Training</p>
          <p>Col Steel</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src="/images/c4.jpg" alt="Course8" />
          <p>Basic to Advance Java Core Training</p>
          <p>Col Steel</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
      </div>
    </div>
  );
}

export default PopularSessions;
