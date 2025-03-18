import React from 'react'

export default function Header() {
  return (
<header class="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-500">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Note App</h1>
      </div>

      <div class="flex items-center gap-4">

        <button
          class="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
          type="button"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</header>

  )
}
