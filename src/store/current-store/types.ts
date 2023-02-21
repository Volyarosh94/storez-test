export type CurrentStoreState = {
  id: string;
  name: string;
  nickname: string;
  products: File[];
};

export type CurrentStoreStore = CurrentStoreState & {
  actions: {
    uploadFile: (file: File) => void;
    changeNickname: (newName: string) => void;
  };
};
