import React from "react";
import { useFieldArray } from "react-hook-form";
import { userDefaultInformation } from "../Home";

export function NestedFiledArray ({ control, register }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `friend`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{background : "#ff000070",position :"relative",padding: "24px 15px",marginBottom : "20px", borderRadius: "20px" }}>
            <button type="button" style={{position : "absolute",right: 11,top: 11}} onClick={() => remove(k)}>
              X
            </button>
            <label>friend name</label>
            <input {...register(`friend.${k}.name`, {required: true})}/>
            <label>friend lastname</label>
            <input {...register(`friend.${k}.lastname`, {required: true})} />
            <label>friend mail</label>
            <input {...register(`friend.${k}.mail`, {required: true})} />
            <label>friend structure</label>
            <input {...register(`friend.${k}.structure`)} />
          </div>

        );
      })}

      <button
        type="button"
        onClick={() =>
          append(
            userDefaultInformation
          )
        }
      >
        add Friend
      </button>

      <hr />
    </div>
  );
};
