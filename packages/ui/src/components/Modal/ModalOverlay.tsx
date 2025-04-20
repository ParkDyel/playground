interface IOverlayProps {
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  overlayBackgroundColor?: string;
}

export default function Overlay({
  onClose,
  overlayBackgroundColor = 'rgba(11,11,11,0.2)',
}: IOverlayProps) {
  return (
    <div
      role="button"
      tabIndex={-1}
      className="ui-fixed ui-inset-0 ui-w-full ui-h-full ui-backdrop-blur-[2px]"
      style={{ backgroundColor: overlayBackgroundColor }}
      onClick={onClose}
    />
  );
}

export type { IOverlayProps };
