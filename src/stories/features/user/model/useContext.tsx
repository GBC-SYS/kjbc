import { createContext, useContext, useState } from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}
interface Props extends PropsWithChildren {}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ko',
  setLocale: () => {},
});

export function LocaleProvider({ children }: Props) {
  const [locale, setLocale] = useState<string>('en');
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
  }

  const { locale } = context;
  return locale;
}

export function useSetLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
  }
  ``;

  const { setLocale } = context;
  return setLocale;
}
