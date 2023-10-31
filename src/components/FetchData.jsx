import { useEffect } from "react";
import { fetchStore } from "../stores";
import { observer } from "mobx-react-lite";
import RenderArrayData from "./RenderArrayData";
import RenderObjectData from "./RenderObjectData";

const FetchData = ({ url }) => {
  useEffect(() => {
    fetchStore.fetch(url);
  }, [url]);

  const isArrayOrObject = () => {
    const data = fetchStore.data;
    if (typeof data === "object" && !Array.isArray(data)) {
      return "object";
    } else {
      return "array";
    }
  };

  const arrayOrObject = isArrayOrObject();

  return (
    <>
      <h2>Fetching data through Mobx from jsonplaceholder</h2>

      {arrayOrObject === "array" ? <RenderArrayData /> : ""}

      {arrayOrObject === "object" ? <RenderObjectData /> : ""}
    </>
  );
};

export default observer(FetchData);
