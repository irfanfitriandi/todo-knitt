"use client";
import { getRunningQueriesThunk } from "@/utils/services/api";
import { wrapper } from "@/utils/redux/store";
import Todo from "../todo";

export default Todo;

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
      revalidate: 10,
    };
  }
);
