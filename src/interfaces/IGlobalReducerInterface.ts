type TLastAction = {
  type: string;
  value: string;
};

export default interface IGlobalReducerInterface {
  colors: {
    textColor: string | null;
    backgroundColor: string | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    accentColor: string | null;
  };
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
