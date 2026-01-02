import { Barlow_Semi_Condensed } from "next/font/google";
import "@/app/_styles/globals.scss";
import Attribution from "@/app/_components/attribution/Attribution";

const barlow = Barlow_Semi_Condensed({
  weight: ["500", "600"]
});

export const metadata = {
  title: "Frontend Mentor | Testimonials Grid Section",
  description: "A frontendmentor.io challenge"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💬</text></svg>"
        />
      </head>
      <body className={`${barlow.variable}`}>
        <main>{children}</main>
        <footer>
          <Attribution />
        </footer>
      </body>
    </html>
  );
}
