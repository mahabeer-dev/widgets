# my-widgets

A beautiful, production-ready React component library with a showcase website.

## Project Structure

\`\`\`
my-widgets/
├── apps/
│   └── docs/          → Next.js showcase website (this project)
├── packages/
│   └── ui/            → Reusable component library
├── package.json       → Root package.json with workspaces
└── README.md
\`\`\`

## Quick Start

### Development

\`\`\`bash
# Install dependencies
npm install

# Start the showcase site
npm run dev

# Build the UI library
npm run build:ui
\`\`\`

### Using the Component Library

#### Install via npm

\`\`\`bash
npm install @my-widgets/ui
\`\`\`

#### Import components

\`\`\`tsx
import { Button, Card, Modal, Tabs, Dropdown, Toast, Input } from "@my-widgets/ui"
\`\`\`

## Available Components

| Component | Description |
|-----------|-------------|
| **Button** | Versatile button with variants, sizes, and loading states |
| **Card** | Flexible container with header, content, and footer |
| **Modal** | Dialog with backdrop, keyboard support, and animations |
| **Tabs** | Tabbed interface for organizing content |
| **Dropdown** | Dropdown menu with trigger and items |
| **Toast** | Notifications with success, error, warning variants |
| **Input** | Text input with labels, addons, and error states |

## Publishing to npm

1. Update version in `packages/ui/package.json`
2. Build the library:
   \`\`\`bash
   npm run build:ui
   \`\`\`
3. Publish:
   \`\`\`bash
   npm run publish:ui
   \`\`\`

## Deploying to Vercel

The showcase site can be deployed to Vercel:

1. Connect your GitHub repository to Vercel
2. Set the root directory to the project root
3. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Submit a pull request

## Future Widgets

Planned components for future releases:

- **Select** - Custom select dropdown with search
- **Checkbox** - Styled checkbox with indeterminate state
- **Radio** - Radio button groups
- **Switch** - Toggle switch component
- **Slider** - Range slider input
- **Progress** - Progress bar and circular progress
- **Avatar** - User avatar with fallback
- **Badge** - Status badges and labels
- **Tooltip** - Hover tooltips
- **Popover** - Click-triggered popovers
- **Accordion** - Collapsible content sections
- **Alert** - Alert messages with variants
- **Skeleton** - Loading placeholder animations
- **Table** - Data table with sorting/filtering

## License

MIT
