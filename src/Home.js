import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NestedFiledArray } from "./form/nestedFieldArray";

export const userDefaultInformation = {
  name: "useFieldArray1",
  lastname : "toto",
  mail : "aa@gmail.com",
  structure : "brain",
}
const defaultValues = {
    ...userDefaultInformation,
    friend: [],
};

export function Home(props) {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue,
    } = useForm({
        defaultValues,
    });
    const onSubmit = (data) => console.log("data", data);

    return (
        <>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>User Information</h1>
                    <label>name</label>
              <input {...register(`name`, {required: true})} />
              <label>lastname</label>
              <input {...register(`lastname`, {required: true})} />
              <label>mail</label>
              <input {...register(`mail`, {required: true})} />
              <label>structure</label>
              <input {...register(`structure`)} />
              <h1>ajouter ami</h1>
                    <NestedFiledArray
                        {...{
                            control,
                            register,
                            defaultValues,
                            getValues,
                            setValue,
                            errors,
                        }}
                    />

              {/* <button type="button" onClick={() => remove(index)}>
                Delete
              </button> */}
              

                    {/* <button type="button" onClick={() => reset(defaultValues)}>
                        Reset
                    </button> */}
                    <input type="submit" />
                </form>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}
