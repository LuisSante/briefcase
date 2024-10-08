import { Navbar } from '@/components/page-ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black">
            <Navbar />
            {children}
        </div>
    );
}
