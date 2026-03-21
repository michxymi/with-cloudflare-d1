import { fileURLToPath } from "node:url";
import { headers as getHeaders } from "next/headers.js";
import Image from "next/image";
import { getPayload } from "payload";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-between overflow-hidden px-6 py-6 text-[15px] leading-6 sm:px-[45px] sm:py-[45px] lg:text-[18px] lg:leading-8">
        <div className="flex grow flex-col items-center justify-center">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
            <Image
              alt="Payload Logo"
              height={65}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              width={65}
            />
          </picture>
          <h1 className="my-6 text-center font-bold text-[32px] leading-[32px] sm:text-[38px] sm:leading-[38px] md:text-[42px] md:leading-[42px] lg:my-10 lg:text-[64px] lg:leading-[70px]">
            {user
              ? `Welcome back, ${user.email}`
              : "Welcome to your new project."}
          </h1>
          <div className="flex items-center gap-3">
            <a
              className="rounded border border-black bg-white px-2 py-1 text-black no-underline transition-opacity focus-visible:opacity-80 focus-visible:outline-none active:opacity-70"
              href={payloadConfig.routes.admin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Go to admin panel
            </a>
            <a
              className="rounded border border-white bg-black px-2 py-1 text-white no-underline transition-opacity focus-visible:opacity-80 focus-visible:outline-none active:opacity-70"
              href="https://payloadcms.com/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5 lg:flex-row lg:gap-2">
          <p className="m-0">Update this page by editing</p>
          <a
            className="rounded bg-zinc-700 px-2 no-underline transition-opacity focus-visible:opacity-80 focus-visible:outline-none active:opacity-70"
            href={fileURL}
          >
            <code className="font-mono">app/(frontend)/page.tsx</code>
          </a>
        </div>
      </div>
    </div>
  );
}
