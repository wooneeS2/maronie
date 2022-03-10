import { atom } from "recoil";
export const sessionStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };
export const searchImageState = atom({
  key: "searchImage",
  default: null,
  effects: [sessionStorageEffect("searchImage")],
});

export const resultImageState = atom({
  key: "resultImage",
  default: null,
  effects: [sessionStorageEffect("resultImage")],
});

export const headerHeightState = atom({
  key: "headerHeight",
  default: 0,
});
export const userState = atom({
  key: "userState",
  default: {},
  effects: [sessionStorageEffect("userInfo")],
});
