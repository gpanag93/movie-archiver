import { InputSource } from '@prisma/client';

/**
 * Validates that an IMDB URL points to a valid title page.
 * IMDB title URLs follow the pattern: /title/ttXXXXXXX/
 * where XXXXXXX is 7-8 digits.
 */
function isValidImdbTitleUrl(url: URL): boolean {
    return /\/title\/tt\d{7,8}(\/|$|\?)/.test(url.pathname);
}

/**
 * Determines the input source based on the provided text.
 * Supports IMDB URLs with or without protocols, including international domains.
 * Examples:
 * - https://imdb.com/title/tt1234567
 * - www.imdb.com/title/tt1234567
 * - m.imdb.de/title/tt1234567
 */
export function determineInputSource(text: string): InputSource {
    try {
        // Normalize input: if it doesn't start with a protocol, add https://
        const normalizedText = text.match(/^https?:\/\//) ? text : `https://${text}`;

        const url = new URL(normalizedText);
        const hostname = url.hostname.toLowerCase();

        // Match imdb.com, www.imdb.com, m.imdb.com, and international domains like imdb.de, imdb.fr, etc.
        const isImdbDomain = hostname === 'imdb.com' ||
            hostname.endsWith('.imdb.com') ||
            /^([a-z]+\.)?imdb\.[a-z]{2,}$/.test(hostname);

        // Ensure it's a valid IMDB title URL (not just any IMDB page)
        const isImdb = isImdbDomain && isValidImdbTitleUrl(url);

        return isImdb ? InputSource.IMDB : InputSource.TEXT;
    } catch {
        // If URL parsing fails, treat as plain text
        return InputSource.TEXT;
    }
}