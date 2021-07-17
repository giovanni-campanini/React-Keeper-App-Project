import React, { useState } from "react";

function CreateArea(props) {
  const [inputContent, setContent] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContent((prevContent) => {
      return {
        ...prevContent,
        [name]: value
      };
    });
  }
  function submitContent(event) {
    props.addNote({
      title: inputContent.title,
      text: inputContent.content
    });
    setContent({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={inputContent.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={inputContent.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitContent}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
