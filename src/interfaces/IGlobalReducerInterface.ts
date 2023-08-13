type TLastAction = {
  type: string;
  value: IColors;
};

export default interface IGlobalReducerInterface {
  colors: IColors;
  colorPickers: {
    textColor: boolean;
    backgroundColor: boolean;
    primaryColor: boolean;
    secondaryColor: boolean;
    accentColor: boolean;
  };
  isDarkMode: boolean;
  lastActions: TLastAction[];
}
