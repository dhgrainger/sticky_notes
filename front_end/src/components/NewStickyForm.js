import React from "react";

const NewStickyForm = ({ onNewSticky = (f) => f }) => {
  let _note_category, _note_description;
  const submit = (e) => {
    e.preventDefault();
    onNewSticky(_note_category.value, _note_description.value);
    _note_category.value = "";
    _note_description.value = "";
    _note_category.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={(input) => (_note_category = input)}
        type="text"
        placeholder="Note Category"
        required
      />
      <input
        ref={(input) => (_note_description = input)}
        type="text"
        placeholder="Note Description"
        required
      />
      <button>Add Sticky</button>
    </form>
  );
};

export default NewStickyForm;