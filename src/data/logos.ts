import type { ImageMetadata } from 'astro';

import braze from '../assets/logos/braze.png';
import salesforce from '../assets/logos/salesforce.png';
import segment from '../assets/logos/segment.png';
import snowflake from '../assets/logos/snowflake.png';
import html5 from '../assets/logos/html5.svg';
import css3 from '../assets/logos/css3.svg';
import javascript from '../assets/logos/javascript.svg';
import react from '../assets/logos/react.png';
import vue from '../assets/logos/vue.png';
import nodejs from '../assets/logos/nodejs.svg';
import aws from '../assets/logos/aws.png';
import wordpress from '../assets/logos/wordpress.png';

export const logoFiles: Record<string, ImageMetadata> = {
  'braze.png': braze,
  'salesforce.png': salesforce,
  'segment.png': segment,
  'snowflake.png': snowflake,
  'html5.svg': html5,
  'css3.svg': css3,
  'javascript.svg': javascript,
  'react.png': react,
  'vue.png': vue,
  'nodejs.svg': nodejs,
  'aws.png': aws,
  'wordpress.png': wordpress,
};
