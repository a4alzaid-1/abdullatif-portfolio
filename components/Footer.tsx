export default function Footer() {
  return (
    <footer className="border-t-2 border-ink py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-text-secondary">
        <p className="font-mono">© {new Date().getFullYear()} Abdullatif Alzaid</p>
        <p className="uppercase tracking-[0.06em] font-bold">Built with Next.js, directed by hand.</p>
      </div>
    </footer>
  );
}
