/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        highlight: 'hsl(var(--highlight))',
        'highlight-foreground': 'hsl(var(--highlight-foreground))',
        // Direct color access
        'forest-green': '#228B22',
        'earth-brown': '#8B4513',
        'soft-beige': '#F5F5DC',
        'sky-blue': '#87CEEB',
        'sunflower-yellow': '#FFD700',
        'coral-orange': '#FF7F50',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

