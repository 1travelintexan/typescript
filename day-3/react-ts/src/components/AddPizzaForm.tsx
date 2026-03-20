import { useState } from "react";

export const AddPizzaForm = () => {
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function handleSubmitPizza(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    //add the pizz to the db....
  }
  return (
    <form onSubmit={handleSubmitPizza}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Difficulty:
        <input
          type="text"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
      </label>
      <button>Add Pizza</button>
    </form>
  );
};
