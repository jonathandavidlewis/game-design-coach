import { Input } from "@/components/ui/input"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function CTA() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid w-full max-w-sm items-center gap-40">
                <Input type="email" id="email" placeholder="Type your email" />
            </div>
                <Link
                    href=""
                    target="_blank"
                    className={`w-[12rem] ${cn(buttonVariants({ size: "lg" }))}`}
                >
                    Join The Waitlist
                </Link>
        </div>
    )
}