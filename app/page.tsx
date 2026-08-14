import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-cream text-ink flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <Image
          src="/logo.png"
          alt="Lena's Improv Place logo"
          width={180}
          height={180}
          className="mx-auto mb-2 rounded-full"
          priority
        />

        <h1 className="font-display uppercase tracking-wide text-[clamp(2rem,7vw,2.8rem)] leading-none text-crimson mb-2">
          Something Fun
          <br />
          Is Coming
        </h1>

        <span className="font-script italic text-2xl text-olive mb-7 block">
          We&apos;re getting the stage ready.
        </span>

        <div className="bg-white border-[3px] border-ink rounded-2xl p-7 text-left">
          <span className="inline-block bg-olive text-ink font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Under Construction
          </span>

          <p className="text-base leading-relaxed mb-4">
            This site is being rebuilt behind the scenes. Online booking will
            be up and running from the middle of September.
          </p>
          <p className="text-base leading-relaxed">
            Until then, classes can still be booked through Ο Ελληνικός
            Πολυχώρος.
          </p>

          <div className="mt-5 pt-5 border-t-2 border-dashed border-crimson text-center">
            <a
              href="https://www.oepathens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-crimson text-cream font-display uppercase tracking-wide text-sm px-7 py-3.5 rounded-lg border-[3px] border-ink no-underline hover:opacity-90 transition-opacity"
            >
              Book via oepathens.com
            </a>
          </div>

          <div className="mt-4 p-3.5 bg-cream border-2 border-crimson rounded-lg text-center text-sm">
            <span className="font-display uppercase tracking-wide text-crimson mr-1.5">
              Questions?
            </span>
            <a
              href="https://instagram.com/lenasimprovplace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crimson font-bold underline"
            >
              @lenasimprovplace
            </a>{" "}
            on Instagram or{" "}
            <a
              href="mailto:lenasimprovplace@gmail.com"
              className="text-crimson font-bold underline"
            >
              email me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
