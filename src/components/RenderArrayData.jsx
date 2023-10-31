import { fetchStore } from "../stores";
import { observer } from "mobx-react-lite";

const RenderArrayData = () => {
  return (
    <>
      {fetchStore.data.map(({ id, title }) => (
        <div key={id}>
          <p>{title}</p>
        </div>
      ))}
    </>
  );
};

export default observer(RenderArrayData);
