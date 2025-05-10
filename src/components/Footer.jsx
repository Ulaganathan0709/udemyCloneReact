function Footer() {
  const columnOne = [
    "Udemy Business",
    "Teach on Udemy",
    "Get the app",
    "About Us",
    "Contact Us",
  ];

  const columnTwo = [
    "Careers",
    "Blog",
    "Help and Support",
    "Affiliate Program",
    "Investor",
  ];

  return (
    <div className="footer">
      <div className="footer__one">
        <div className="footer__one__s1">
          {columnOne.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="footer__one__s2">
          {columnTwo.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="footer__two">
        <h1>Udemy</h1>
        <p>&copy; Udemy, Incc</p>
      </div>
    </div>
  );
}

export default Footer;
