type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'left' | 'center' | 'bottom';

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center' | 'left-left'>
    | 'center';
};

export const Toast = ({ position }: ToastProps) => {
  return <div> Toast Notification Position - {position}</div>;
};
