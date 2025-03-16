"use client"
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
    const params = useParams();
    return (
        <div className="min-h-screen">

            <h1 className="text-green-500">The{params.id}</h1>

        </div>
    );
};

export default Page;