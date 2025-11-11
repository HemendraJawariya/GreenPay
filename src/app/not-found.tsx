import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <RootLayout>
      <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-3 text-center">
        <div>
          {/* Status Code */}
          <h1 className="text-primary text-6xl font-bold">404</h1>

          {/* Message */}
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md text-sm">
           Sorry, the page you&apos;re looking for is unavailable or has been moved.
          </p>
        </div>
        {/* Back to Home */}

        <Button asChild className="flex items-center gap-2">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
           Back to Homepage
          </Link>
        </Button>
      </div>
    </RootLayout>
  );
}
