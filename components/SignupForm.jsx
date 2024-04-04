'use client';

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { signIn } from "next-auth/react";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "", // Added confirmPassword field
            address: "",
            marketplaceName: "",
            district: "",
            state: "",
            ta: "", // Optional T/A field
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            address: Yup.string().required("Address is required"),
            marketplaceName: Yup.string().required("Marketplace Name is required"),
            district: Yup.string().required("District is required"),
            state: Yup.string().required("State is required"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post("/api/register", values);
                console.log(response.data); // Handle successful submission
                if(response.data.success === true)
                {
                    await signIn('credentials', {email, password, callbackUrl: '/'});
                }
                // Redirect or display success message
            } catch (error) {
                console.error(error); // Handle errors
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md h-full mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                />
                {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="marketplaceName" className="block text-sm font-medium text-gray-700">Marketplace Name</label>
                <input
                    id="marketplaceName"
                    name="marketplaceName"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.marketplaceName}
                    onChange={formik.handleChange}
                />
                {formik.touched.marketplaceName && formik.errors.marketplaceName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.marketplaceName}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                <input
                    id="district"
                    name="district"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.district}
                    onChange={formik.handleChange}
                />
                {formik.touched.district && formik.errors.district && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.district}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                    id="state"
                    name="state"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                />
                {formik.touched.state && formik.errors.state && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
                )}
            </div>

            {/* Optional T/A field */}
            <div className="mb-4">
                <label htmlFor="ta" className="block text-sm font-medium text-gray-700">T/A (optional)</label>
                <input
                    id="ta"
                    name="ta"
                    type="text"
                    className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formik.values.ta}
                    onChange={formik.handleChange}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
