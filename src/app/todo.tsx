import Link from "next/link";
import { usePathname } from "next/navigation";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export const metadata = {
  title: "Todo List",
  description: "Generated by create next app",
};

const Todo = () => {
  const pathname = usePathname();
  const isSSR = pathname === "/";

  return (
    <main className="flex flex-col justify-center items-center gap-8 p-10">
      <div className="flex w-full justify-between items-center">
        <Link
          href={"/"}
          className={`${isSSR && "text-3xl font-semibold text-blue-400"}`}
          target="_top"
        >
          {!isSSR && <span>{`<<`}</span>} SSR
        </Link>
        <TodoForm />
        <Link
          href={"/isr"}
          className={`${!isSSR && "text-3xl font-semibold text-blue-400"}`}
          target="_top"
        >
          ISR {isSSR && <span>{`>>`}</span>}
        </Link>
      </div>
      <TodoList />
    </main>
  );
};

export default Todo;
