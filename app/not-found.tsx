import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0A] flex flex-col items-center justify-center text-center p-6 selection:bg-black selection:text-white">
            <h1 className="font-display text-9xl font-bold tracking-tighter mb-4 opacity-5">404</h1>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-widest mb-6">Blueprint Not Found</h2>
            <p className="text-gray-500 max-w-md mb-10 leading-relaxed font-light">
                The architecture you are looking for does not exist in our current schematics.
                Return to the base layer to recalibrate.
            </p>
            <div className="flex gap-4">
                <Link href="/">
                    <Button variant="default">Return to Base</Button>
                </Link>
                <Link href="/audit">
                    <Button variant="outline">Initiate Audit</Button>
                </Link>
            </div>
        </main>
    );
}
