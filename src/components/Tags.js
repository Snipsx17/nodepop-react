const Tags = ({ tags }) => {
  return (
    <div style={{ marginTop: '1.3rem', marginBottom: '1.3rem' }}>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: '#3dd2ba',
              color: '#fff',
              borderRadius: '999px',
              padding: '0.5rem',
              fontSize: '1.1rem',
              marginRight: '0.5rem',
            }}
          >
            {tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;
