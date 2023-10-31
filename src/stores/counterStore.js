import { observable, action } from "mobx";
import remotedev from "mobx-remotedev";

const createCounterStore = () => {
  const store = observable({
    count: 0,
    increment: action(() => {
      store.count++;
    }),
    reset: action(() => {
      store.count = 0;
    }),
    decrement: action(() => {
      store.count--;
    })
  });

  return process.env.NODE_ENV === "development" ? remotedev(store) : store;
};
const store = createCounterStore();
export default store;
