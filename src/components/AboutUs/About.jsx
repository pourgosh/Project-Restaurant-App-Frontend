import staffImg from "../../assets/Images/staffImg2.jpg";

const About = () => {
  const myText = `Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.`;

  return (
    <div className="aboutUsWrapper">
      <div className="aboutUsTextWrapper">
        <div className="aboutUsTitleContainer">
          <p>About Us</p>
        </div>
        <div className="aboutUsTextContainer">
          <div>
            <p>{myText}</p>
          </div>
        </div>
      </div>
      <div className="aboutUsImgWrapperWrapper">
        <div className="aboutUsImgWrapper">
          <img src={staffImg} alt="staff members image" />
        </div>
      </div>
    </div>
  );
};

export default About;
