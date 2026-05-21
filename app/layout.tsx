import { ReactNode } from "react";
import "@/app/globals.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="CKY8za9laVnO0ILSUFS0lLYwNyut-vzW6-TnMVL4XsM"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
