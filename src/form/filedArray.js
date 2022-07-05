import React from "react";
import { useFieldArray } from "react-hook-form";
import { NestedFiledArray } from "./nestedFieldArray";


export function FieldArray({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test"
  });


  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>

            </li>
          );
        })}
      </ul>

      {/* <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("test", [
              ...(getValues().test || []),
              {
                name: "append",
                nestedArray: [{ field1: "append", field2: "append" }]
              }
            ]);
          }}
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={() => {
            prepend({ name: "append" });
          }}
        >
          prepend
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("test", [
              {
                name: "append",
                nestedArray: [{ field1: "Prepend", field2: "Prepend" }]
              },
              ...(getValues().test || [])
            ]);
          }}
        >
          prepend Nested
        </button>
      </section> */}

    </>
  );
}
