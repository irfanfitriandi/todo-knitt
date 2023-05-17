"use client";
import Loading from "@/components/Loading";
import { useGetTodosQuery } from "@/utils/services/api";
import { useState } from "react";

const TodoList = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching, isError } = useGetTodosQuery(page * 10);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div className="grid grid-cols-2 w-full min-h-[75vh]">
        {data?.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center rounded-md bg-white text-black m-4 p-2"
          >
            <code className="text-xl text-center">{data.title}</code>
            <div className="flex justify-between items-center w-full">
              <code className="text-lg">
                {data.id}
                <span className="text-sm">/100</span>
              </code>
              <div
                className={`w-5 h-5 rounded-full ${
                  data.completed ? "bg-blue-400" : "bg-red-400"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-xl">
        <button
          type="button"
          onClick={() => setPage(page !== 0 ? page - 1 : 0)}
          disabled={page === 0}
          className="disabled:opacity-30"
        >{`<<`}</button>
        <div>{page === 0 ? 1 : page + 1}</div>
        <button
          type="button"
          onClick={() => setPage(page !== 9 ? page + 1 : 10)}
          disabled={page === 9}
          className="disabled:opacity-30"
        >{`>>`}</button>
      </div>
    </div>
  );
};

export default TodoList;
