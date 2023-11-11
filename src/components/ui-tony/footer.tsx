import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="mt-10 w-full bg-gray-800 py-6">
      <div className="flex   flex-col items-center px-4 text-gray-400">
        <div className="mb-3 text-center text-sm">
          <p className="flex gap-3">
            <span>© {year} GPTs Store </span>
            <Link
              href="/terms/privacy-policy"
              className="text-blue-400 hover:text-blue-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/terms-of-service"
              className="text-blue-400 hover:text-blue-500"
            >
              Terms of Service
            </Link>
          </p>
          <p>GPTs Store</p>
        </div>

        <p className="text-lg font-semibold text-white">Similar links</p>
        <Link
          target="_blank"
          className="mb-5 hover:text-blue-500"
          href="https://meetups.ai/"
        >
          Meetups.ai
        </Link>
      </div>
    </footer>
  );
}
