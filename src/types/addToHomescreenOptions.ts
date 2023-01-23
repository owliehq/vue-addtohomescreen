interface Props {
  title?: string;
  content?: string;
  titleColor?: string;
  contentColor?: string;
  iconPath?: string;
  iconColor?: string;
  iconTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  background?: string;
  lang?: string;
  expires?: number;
}

type PropsKeys = keyof Props;

export { Props, PropsKeys };
