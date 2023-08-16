declare interface IColors {
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
}

declare module 'linear-gradient-text';
