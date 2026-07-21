export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-dim">
        <p className="font-mono">© {new Date().getFullYear()} Abdullatif Alzaid</p>
        <p>Built with Next.js, directed by hand.</p>
      </div>
    </footer>
  );
}
