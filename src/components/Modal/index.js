import React from "react";
import { StyledModal } from "./components";

export default ({
  children,
  isOpen,
  onBackgroundClick,
  onEscapeKeydown,
  ...props
}) => (
  <StyledModal
    isOpen={isOpen}
    onBackgroundClick={onBackgroundClick}
    onEscapeKeydown={onEscapeKeydown}
    {...props}
  >
    {children}
  </StyledModal>
);
