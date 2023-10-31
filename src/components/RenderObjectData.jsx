import { fetchStore } from "../stores";
import { observer } from "mobx-react-lite";

const RenderObjectData = () => {
  return (
    <div>
      <p>{fetchStore.data.title}</p>
    </div>
  );
};

export default observer(RenderObjectData);
