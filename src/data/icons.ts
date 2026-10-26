import strategy from '../assets/icons/strategy.svg?raw';
import layers from '../assets/icons/layers.svg?raw';
import code from '../assets/icons/code.svg?raw';
import search from '../assets/icons/search.svg?raw';
import multiuser from '../assets/icons/multiuser.svg?raw';
import ai from '../assets/icons/ai.svg?raw';

export const serviceIcons: Record<string, string> = {
  strategy,
  layers,
  code,
  search,
  multiuser,
  ai,
};

/** Strips the XML prolog, doctype and generator comments the source files ship with. */
export function cleanSvg(raw: string): string {
  return raw
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s(width|height)="[^"]*"/g, '')
    .trim();
}
