import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-red-600">403 - Unauthorized</h1>
            <p>You do not have permission to access this page.</p>
            <Link href="/" className="text-blue-500 hover:underline">Go Home</Link>
        </div>
    );
}
