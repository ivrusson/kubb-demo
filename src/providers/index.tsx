import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { PropsWithChildren } from "react";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <Theme>{children}</Theme>
    </ReactQueryProvider>
  );
};

export default Providers;
