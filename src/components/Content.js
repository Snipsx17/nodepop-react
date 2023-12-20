const Content = ({ title, children }) => {
  return (
    <>
      <h2 className="page-title">{title}</h2>
      <section>{children}</section>
    </>
  );
};

export default Content;
