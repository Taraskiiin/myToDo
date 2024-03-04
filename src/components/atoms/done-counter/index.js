export const DoneCounter = ({ all, doneCount }) => (
  <h3
    className="text-center font-bold text-2xl w-1/2 m-auto
    text-success mb-10"
  >
    DONE: {doneCount}/{all}
  </h3>
)
