import React from 'react';
import MainImageSection from '../../components/main-image-section/main-image-section';
import MaslowHierarchy from '../../components/maslow-hierarchy/maslow-hierarchy';

export default function About() {
    return (
        <div>
            <MainImageSection></MainImageSection>
            <main>
                <div className="w-8/12 py-6 mx-auto">
                    Hi! I'm Mazelle. Robert Mazelle.
                    If you want to know me better, here's a Mazllow's Hierarchy for you.
                    <MaslowHierarchy></MaslowHierarchy>
                </div>
            </main>
        </div>
    )
}