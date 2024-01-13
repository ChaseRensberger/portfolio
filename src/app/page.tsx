import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen pt-12 px-8 text-center">
      <h1 className="text-4xl font-bold">Chase Rensberger</h1>
      <h2 className="text-2xl text-gray-500">
        Software Enginner & Computer Scientist
      </h2>
      <Separator className="w-[50rem] mx-auto my-2" />
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
      <section className="w-[60rem] mx-auto mt-12">
        <Link
          href="https://balance.chaserensberger.com"
          className="cursor-pointer"
        >
          <Card className="w-[350px]">
            <CardHeader className="text-left">
              <CardTitle>Balance</CardTitle>
              <CardDescription>Personal Finance Tool</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </main>
  );
}
