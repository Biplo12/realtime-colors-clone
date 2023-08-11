type TLastAction = {
  type: string;
  value:
    | string
    | {
        textColor: {
          color: string | null;
          isLocked: boolean;
        };
        backgroundColor: {
          color: string | null;
          isLocked: boolean;
        };
        primaryColor: {
          color: string | null;
          isLocked: boolean;
        };
        secondaryColor: {
          color: string | null;
          isLocked: boolean;
        };
        accentColor: {
          color: string | null;
          isLocked: boolean;
        };
        isDarkMode: boolean;
      };
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
