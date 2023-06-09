"use client";
import { getRunningQueriesThunk } from "@/utils/services/api";
import { wrapper } from "@/utils/redux/store";
import Todo from "./todo";

export default Todo;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
