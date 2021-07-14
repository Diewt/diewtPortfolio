// This file contains the general layout of the Website through all its pages
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

export default function Container(props) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // After mounting, acess to the theme should be available
    useEffect(()=> setMounted(true), []);

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Chris Diewtragulchai.',
        description: 'Videogame and Manga enthusiast.',
        type: 'website',
        ...customMeta
    };

    return(
        <div className='bg-white dark:bg-black'>
            <head>
            </head>
            <main>
                <Footer />
            </main>
        </div>
    );
}

