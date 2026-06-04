import React from 'react';
import { site } from '../config/site';

interface SeoProps {
  /** Page-specific title; the site name is appended automatically. */
  title: string;
  description?: string;
}

/**
 * Per-page document metadata. React 19 hoists <title>/<meta> rendered anywhere
 * in the tree into <head>, so no helmet dependency is needed.
 */
const Seo: React.FC<SeoProps> = ({ title, description = site.description }) => {
  const fullTitle = `${title} | ${site.shortName}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  );
};

export default Seo;
