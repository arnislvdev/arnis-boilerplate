/**
 * Footer Component
 * 
 * Simple footer component that displays attribution
 * with a link to the creator's GitHub profile.
 */

export default function Footer() {
    return (
      <footer className="justify-center flex items-center py-4 gap-1 text-center text-sm font-bold text-muted-foreground">

        <span>Built by</span>

        <a
          href="https://github.com/arnislvdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-[0.5ch] underline-offset-4 hover:underline"
        >
          <img
            src="https://d80v5j6hit.ufs.sh/f/IztGFCcXa7Pnmgp0DUld2c9jqawLMl7TobFPIJsW5VnQei81"
            alt="Arnis avatar"
            width={32}
            height={32}
            className="rounded-full size-5 group-hover:size-6 transition-all"
          />
          Arnis
        </a>
      </footer>
    )
}
