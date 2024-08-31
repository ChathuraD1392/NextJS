import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  {
    if (!children) return;
  }
  return (
    <div>
      <Text as="p" color="red">
        {children}
      </Text>
    </div>
  );
};

export default ErrorMessage;
