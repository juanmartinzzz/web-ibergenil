const HashLink = ({ children, to }) => {
  const handleClick = () => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

export default HashLink;