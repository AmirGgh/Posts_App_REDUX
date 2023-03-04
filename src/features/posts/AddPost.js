// import { useState } from "react";
import useGenericForm from "../../utile/genericForm";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const [formState, handleInputChange, handleSubmit, reset] = useGenericForm({
    title: "",
    content: "",
    id: "",
  });

  return (
    <section>
      <h2>Add A New Post</h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (formState.content && formState.title) {
              handleSubmit();
              dispatch(
                postAdded({
                  formState,
                })
              );
              reset();
            }
          }}
        >
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            id='title'
            value={formState?.title || ""}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor='content'>content:</label>

          <textarea
            type='text'
            name='content'
            id='content'
            value={formState?.content || ""}
            onChange={handleInputChange}
          />
          <br />
          <button type='submit'>Save Post</button>
        </form>
      </div>
    </section>
  );
};

export default AddForm;
