function AboutModal ({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi sit expedita non officia eum tenetur, rerum illo aperiam, quaerat soluta nobis ipsam dignissimos maiores doloribus nulla dolore debitis corporis.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AboutModal;