'use client';

import { cn } from "@/lib/utils";
import { typeFont, typeFontRajdhani } from "@/components/ui/technology-footer-folder";

const experience = [
    {
        title: 'LexCom AI',
        description: (
            <ul className={cn(
                "list-disc space-y-2",
                typeFontRajdhani.className
            )}
            >
                <li>
                    Led the development of an AI-based product profitability prediction system for an e-commerce platform, plus extra
                    services such as text generators using OpenAi API , the project covers from backend and frontend development to
                    cloud deployment.
                </li>
                <li>
                    Utilized data balancing techniques such as SMOTE during the training phase to enhance dataset accuracy and
                    improve model performance
                </li>
                <li>Coordinated the backend and frontend integration, ensuring a smooth and functional user experience</li>
                <li>
                    Managed the implementation of secure authentication with JWT and the configuration of reverse proxies with Nginx
                    Proxy Manager.
                </li>
                <li>
                    I performed the containerization of the application using Docker, facilitating the deployment and maintenance of the
                    software.
                </li>
                <li>I deployed the solution on Google Cloud Platform (Compute Engine)</li>
                <li>Development of Artificial Intelligence using advanced machine learning techniques.</li>
                <li className={cn(
                    'text-[18px]',
                    typeFont.className
                )}>
                    Built with: Python, Typescript, Django REST framework, React, Vite, PostgresSQL, JWT, Docker, Compute Engine
                    GCP, Nginx Proxy Manager
                </li>
                <li className={cn(
                    'text-[18px]',
                    typeFont.className
                )}>
                    Note: The project is private on GitHub, but I can provide access for review upon request.
                </li>
            </ul>
        ),
        badge: 'Tech Lead -> Oct. 2023 - Jun. 2024'
    },
];

export function ExperienceSection() {
    return (
        <div
            className="mx-auto mb-[-150px] px-8 max-w-5xl"
        >
            <h1 id="experience" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-white md:text-7xl">
                Experience
            </h1>
            <div className="relative mx-auto pt-4 pb-32 max-w-2xl text-white antialiased">
                {experience.map((item, index) => (
                    <div key={index}>
                        <div key={`content-${index}`} className="mt-4 md:mt-0 mb-10">
                            <h2 className={cn('text-xl text-white')}>{item.title}</h2>
                            <span className="py-1 rounded-full w-fit text-neutral-200 text-sm italic">{item.badge}</span>
                            <div className="mt-2 text-sm text-white prose-invert prose prose-sm">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
