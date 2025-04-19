import { type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  selector?: string;
  parent?: HTMLElement;
}

function Portal({ children, selector = 'modal', parent }: PortalProps) {
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = parent || document.body;
    let [element] = document.querySelectorAll(
      selector,
    ) as NodeListOf<HTMLElement>;

    if (!element) {
      element = document.createElement('div');
      element.id = selector;

      element.style.position = 'absolute';
      element.style.top = '0';
      element.style.left = '0';
      element.style.width = '100%';
      element.style.height = '100%';

      root.appendChild(element);

      setEl(element);
    }

    return () => {
      if (!element) {
        return;
      }
      root.removeChild(element);
    };
  }, [selector, parent]);

  if (!el) {
    return null;
  }

  return createPortal(children, el, selector);
}

export default Portal;
