import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="mt-10 w-full bg-gray-800 py-6">
      <div className="flex   flex-col items-center px-4 text-gray-400">
        <p className="text-lg font-semibold text-white">Similar links</p>
        <Link
          target="_blank"
          className="mb-5 hover:text-blue-500"
          href="https://meetups.ai/"
        >
          Meetups.ai
        </Link>

        <div className="text-center text-sm">
          <p>© {year} GPTs Store. All rights reserved.</p>
          <p>GPTs Store</p>
        </div>
      </div>
    </footer>
  );
}
