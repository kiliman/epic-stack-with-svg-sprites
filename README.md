# Epic Stack Example with SVG Sprites

This example shows how you can use SVG sprites to manage your icons. This is
based on recommendations from the article
[The "best" way to manage icons in React.js](https://benadam.me/thoughts/react-svg-sprites/)

We will use the [`rmx-cli`](https://github.com/kiliman/rmx-cli) package to
automate the sprite generation.

## Install

1. Install the `rmx-cli` package as a dev dependency

```bash
npm install -D rmx-cli
```

2. Add a script to _package.json_ to easily generate your sprites. This will
   scan for SVG files in the _assets/svg/icons_ folder and generate the React
   component and sprite file in _app/components/icons_

```json
"scripts": {
  "gen-svg-sprite": "rmx svg-sprite assets/svg/icons app/components/icons"
}
```

3. Copy the required SVG files from your icon set. If you have multiple sets or
   sizes or styles, make sure you separate them by folders. The tool will create
   the same folder structure in the output.

```
assets
└── svg
    └── icons
        └── heroicons
            ├── 20
            │   └── solid
            │       ├── arrow-left-on-rectangle.svg
            │       ├── pencil-square.svg
            │       └── user.svg
            └── 24
                └── outline
                    ├── computer-desktop.svg
                    ├── moon.svg
                    └── sun.svg
```

4. Generate the sprite file using the npm script. You can regenerate the sprites
   anytime you add new SVG files to your source folder.

```bash
npm run gen-svg-sprite
```

## Usage

To use the new icons, you will need to first import the sprite file and add it
to your `links` export. I recommend setting `rel=preload` to ensure the icon
files gets loaded immediately.

Each sprite exports an `href` that is the URL of the generated sprite file. In
addition, a React component is exported for every SVG file. It will be named the
same as the filename in _TitleCase_.

```ts
import {
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  UserIcon,
  href as icons20solid,
} from '~/components/icons/heroicons/20/solid/index.tsx'
import { href as icons24outline } from '~/components/icons/heroicons/24/outline/index.tsx'

export const links: LinksFunction = () => {
  return [
    // Preload sprite icons
    { rel: 'preload', href: icons24outline, as: 'image' },
    { rel: 'preload', href: icons20solid, as: 'image' },
    ...
  ]
}
```

## Styling the Icon

You can use the `className` prop to style your icons. You can specify the
height, width, and color.

```ts
<UserIcon className="h-6 w-6 text-foreground/60" />
```

## Example

The example shows icons used in the User Dropdown Menu as well as the theme
picker:

<img width="237" alt="image" src="https://github.com/epicweb-dev/epic-stack/assets/47168/940163d9-665f-4d1c-947a-12174a57a8dd">

<img width="121" alt="image" src="https://github.com/epicweb-dev/epic-stack/assets/47168/3defa740-6dd3-4a34-96c4-958404e6c865">

<img width="113" alt="image" src="https://github.com/epicweb-dev/epic-stack/assets/47168/40f0a8ee-05cc-446b-a5a7-50eeeab56bec">
