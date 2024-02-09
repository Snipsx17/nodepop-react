const Content = ({ title, children }) => {
  return (
    <>
      <h2 className="page-title" style={{ textTransform: 'capitalize' }}>
        {title}
      </h2>
      <section>{children}</section>
    </>
  );
};

export default Content;
