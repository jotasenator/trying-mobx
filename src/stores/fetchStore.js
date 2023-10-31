import { observable, action, runInAction } from "mobx";
import remotedev from "mobx-remotedev";

const createFetchStore = () => {
  const store = observable({
    data: [] || {},
    // fetch: action((url) => {
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       runInAction(() => {
    //         store.data = json;
    //       });
    //     });
    // })
    fetch: action(async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      runInAction(() => {
        store.data = json;
      });
    })
  });

  return process.env.NODE_ENV === "development" ? remotedev(store) : store;
};

const store = createFetchStore();
export default store;
