"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const schema = z.object({
  schoolName: z.string().min(2).max(80),
  address: z.string().min(2).max(80),
  city: z.string().min(2).max(30),
  state: z.string().min(2).max(30),
  contact: z.string().length(10, "Contact must be 10 digits"),
  email: z.string().email(),
});

type formFields = z.infer<typeof schema>;

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch {
      setError("root", {
        message: "This school is already registered",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-white max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <label
          htmlFor="School Name"
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          School Name
        </label>
        <input
          {...register("schoolName")}
          type="text"
          placeholder="Abc school"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.schoolName && (
          <div className="text-red-500 text-sm mt-1">
            {errors.schoolName.message}
          </div>
        )}
        <label
          htmlFor="Address"
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          Address
        </label>
        <input
          {...register("address")}
          type="text"
          placeholder="123 Main road"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.address && (
          <div className="text-red-500 text-sm mt-1">
            {errors.address.message}
          </div>
        )}

        <label
          htmlFor="City"
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          City
        </label>
        <input
          {...register("city")}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.city && (
          <div className="text-red-500 text-sm mt-1">
            {errors.city?.message}
          </div>
        )}

        <label
          htmlFor="State"
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          State
        </label>
        <input
          {...register("state")}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.state && (
          <div className="text-red-500 text-sm mt-1">
            {errors.state?.message}
          </div>
        )}

        <label
          htmlFor="Contact No."
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          Contact No.
        </label>
        <input
          {...register("contact")}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.contact && (
          <div className="text-red-500 text-sm mt-1">
            {errors.contact?.message}
          </div>
        )}

        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-300 mt-2"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </div>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500 text-sm mt-2">{errors.root.message}</div>
        )}
      </form>
    </div>
  );
};

export default AddSchool;
