import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function capitalizeFirstLetter(sentence: string): string {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`
}