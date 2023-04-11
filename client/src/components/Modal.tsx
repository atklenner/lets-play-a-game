interface Props {
  children: JSX.Element;
}

export default function Modal({ children }: Props) {
  return <div className="modal">{children}</div>;
}
