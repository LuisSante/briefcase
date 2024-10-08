'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { BackgroundConstellacion } from '@/components/ui/background-constellacion';

const words = [
    {
        text: 'TypeScript',
    },
    {
        text: 'and'
    },
    {
        text: 'React/Next.js'
    },
    {
        text: 'developer',
        className: 'text-blue-500'
    }
];

const wordsSm = [
    {
        text: 'TS',
    },
    {
        text: 'and'
    },
    {
        text: 'React/Next.js'
    },
    {
        text: 'developer',
        className: 'text-blue-500'
    }
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex flex-col justify-center items-center bg-black bg-dot-white/[0.2] w-full h-screen"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <p className="text-neutral-200 text-xs sm:text-base"> Hello, I&apos;m Luis Sante. A programmer passionate about Software Engineering.</p>
            <div className='lg:block hidden'>
                <TypewriterEffectSmooth words={words} />
            </div>
            <div className='lg:hidden'>
                <TypewriterEffectSmooth words={wordsSm} />
            </div>
            <div className="z-30 flex md:flex-row flex-col items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                {/* Todo: drive */}
                <Link href="">
                    <Button className='bg-blue-500'>Download CV</Button>
                </Link>
                <Link href="https://wa.me/51923258987">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
            </div>
            <BackgroundConstellacion />
        </div>
    );
}
