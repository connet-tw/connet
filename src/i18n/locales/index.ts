export const localeData = [
  ...require("react-intl/locale-data/en"),
  ...require("react-intl/locale-data/zh"),
];

export interface Language {
  code: string, name: string
};

export const languages = [
  {code: "en", name: "EN"},
  {code: "zh", name: "中文"},
];
