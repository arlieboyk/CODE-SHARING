import { Inter } from "@next/font/google";
import TodoList from "./TodoList";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <main className="flex">
            <div className="w-1/2">
            {/* @ts-ignore */}
            <TodoList  />
            </div>

        <div className="flex-1 mt-3 mx-5 "> {children}</div>
      </main>
  );
}
