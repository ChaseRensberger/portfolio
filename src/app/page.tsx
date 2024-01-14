import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-8">
      <header className="mx-auto px-8 w-full sm:max-w-[640px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <h1 className="text-lg font-bold">Chase Rensberger</h1>
            <h2>Software Engineer & Computer Scientist</h2>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/chaserensberger"
              className="cursor-pointer"
            >
              <FaLinkedin size={25} />
            </Link>

            <Link
              href="https://github.com/ChaseRensberger"
              className="cursor-pointer"
            >
              <FaGithub size={25} />
            </Link>
          </div>
        </div>
      </header>
      {/* <section className="flex-1">
        <div className="container mx-auto px-8 flex flex-col space-y-2">
          <Link
            href="https://balance.chaserensberger.com"
            className="cursor-pointer"
          >
            <Card>
              <CardHeader className="text-left">
                <CardTitle>Balance</CardTitle>
                <CardDescription>Personal Finance Tool</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section> */}
    </main>
  );
}
