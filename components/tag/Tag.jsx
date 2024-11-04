const Tag = () => {
  const tagList = [
    "JAVA",
    "Java Script",
    "Spring Boot",
    "MY SQL",
    "Mongo DB",
    "Jenkins",
    "SVN",
    "Git Hub",
    "Word",
    "Excel",
    "Power point",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
