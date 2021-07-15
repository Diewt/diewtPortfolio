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
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta name="keywords" content="Chris Diewtragulchai, Chris, Diewtragulchai" />
                <meta name="author" content="Chris Diewtragulchai" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Chris Diewtragulchai" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && (
                  <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <main>
                {children}
                <Footer />
            </main>
        </div>
    );
}

