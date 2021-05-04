import type { Game_Doc_Data } from "../../.tina/__generated__/types";

const GamesRenderer = (props: Game_Doc_Data) => {
  const { title } = props;

  return <div>Games: {title}</div>;
};

export default GamesRenderer;
