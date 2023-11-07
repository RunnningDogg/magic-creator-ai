export default function Footer() {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="mt-10 w-full bg-gray-800 py-6">
      <div className="mx-auto max-w-screen-lg px-4 text-gray-400">
        <div className="text-center text-sm">
          <p>© {year} GPTs Store. All rights reserved.</p>
          <p>Made with ❤️ for the AI community.</p>
        </div>
      </div>
    </footer>
  );
}
