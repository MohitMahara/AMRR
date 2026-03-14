import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Centralized Catalog",
    description:
      "Keep all products in one place with structured details, images, and categories.",
  },
  {
    title: "Quick Item Onboarding",
    description:
      "Add new products in minutes with an intuitive form and image uploads.",
  },
  {
    title: "Instant Discovery",
    description:
      "Browse all items and open rich detail pages to inspect each product thoroughly.",
  },
];

const stats = [
  { label: "Single Product Hub", value: "1" },
  { label: "Core Workflows", value: "3" },
  { label: "Admin Friendly", value: "100%" },
];

const HomePage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-60 w-60 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-1/2">
            <p className="mb-3 inline-block rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-200">
              AMRR Item Management
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              A modern landing experience for your product catalog.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-200">
              Manage inventory effortlessly, showcase products beautifully, and respond to enquiries faster from one streamlined dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/add-items"
                className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-400"
              >
                Add New Item
              </Link>
              <Link
                to="/view-items"
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-100 transition hover:bg-white hover:text-gray-900"
              >
                Browse Items
              </Link>
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-[45%] lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-yellow-300">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why this platform works</h2>
          <p className="mt-3 text-gray-600">
            Designed for teams that need clarity, speed, and a clean product workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:px-10">
          <h2 className="text-3xl font-bold text-white">Ready to improve your item workflow?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Start by adding your first item and make your catalog easier to explore for everyone.
          </p>
          <Link
            to="/add-items"
            className="mt-7 inline-block rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-gray-900 transition hover:bg-yellow-400"
          >
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
