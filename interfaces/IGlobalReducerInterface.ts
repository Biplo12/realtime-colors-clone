export default interface IGlobalReducerInterface {
  colors: {
    textColor: string;
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  isDarkMode: boolean;
  lastActions: string[];
}
