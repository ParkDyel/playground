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
      className="absolute top-0 left-0 z-[calc(var(--z-index-modal)-1)] w-full h-full"
      style={{ backgroundColor: overlayBackgroundColor }}
      onClick={onClose}
    />
  );
}

export type { IOverlayProps };
