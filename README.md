## Usage

```js
import ClassicEditor from "coursemology-ckeditor";

import "coursemology-ckeditor/build/ckeditor.css";
```

There are no TypeScript definitions emitted for this package because for most cases, it's not needed; you just need to pass `ClassicEditor` to the CKEditor integration component you're using. However, `ckeditor5` itself does have TypeScript definitions, so when you're working in `src/editor.js`, your IDE will pick up the types from `ckeditor5` and provide you with autocompletion.

## Updating

With CKEditor's [new installation methods](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-42.html) introduced in v42, all CKEditor packages are now distributed via the `ckeditor5` npm package. This package will install a bunch of `@ckeditor/*` packages in `node_modules` that you can import in `src/editor.js` as needed.

To keep up with the latest version of CKEditor, just upgrade `ckeditor5`.

```sh
npm install ckeditor5@latest
```

### Adding plugins

Do not import the package directly from `ckeditor5`, rather, find out the actual built package in `node_modules/@ckeditor/*` and import from there.

```diff
- import { Bold } from 'ckeditor5';
- import "ckeditor5/ckeditor5.css";
+ import { Bold } from '@ckeditor/ckeditor5-basic-styles/dist/index.js';
+ import "@ckeditor/ckeditor5-basic-styles/dist/index.css";
```

You can find the [individual package names here](https://ckeditor.com/docs/ckeditor5/latest/getting-started/legacy/legacy-imports.html#finding-individual-packages). Remember to also include the package's CSS file.

We do this so that the bundler doesn't accidentally import packages for plugins that we don't use so as [not to increase the bundle size](https://ckeditor.com/docs/ckeditor5/latest/getting-started/setup/optimizing-build-size.html).

> [!CAUTION]
> It is **imperative** that you watch out for what you import, only what you import, and nothing else. CKEditor, both its CSS and JS bundles, is a large package, about 1.61 MB parsed (376.76 KB gzipped), at time of writing.

## Rebuilding

Before beginning any work, install all the dependencies.

```sh
npm install
```

After making any changes to the configuration, you need to rebuild the editor before it can be imported in Coursemology.

```sh
npm run build
```

This package follows [semantic versioning](https://semver.org/). To release a new version to be imported to Coursemology,

1. bump the version _semantically_ in `package.json`,
2. commit your changes,
3. create a new git tag with the version number, e.g. `v1.0.0`,
4. push all your changes and tags to the remote repository,
5. create a new release in GitHub with some changelog, if any, and
6. update this package's version in Coursemology's `package.json` to `github:Coursemology/CKEditor5-build-coursemology#v1.0.0` or whatever version you tagged.
7. run `yarn install` in Coursemology's `client` directory to update the package.

## Local testing

You can local test your new custom build by linking it with Yarn.

In this repository's root directory, run:

```sh
yarn link
```

You should see a message that gives you the following command that you should run in Coursemology's client root directory.

```sh
yarn link "coursemology-ckeditor"
```

You can now import the editor, even if `coursemology-ckeditor` is not listed in your `package.json`.

If you already have an existing package installed with the same name, this will take precedence over the existing package.

### Unlinking

In this repository's root directory, run:

```sh
yarn unlink
```

In Coursemology's client root directory, run:

```sh
yarn unlink "coursemology-ckeditor"
```

## Contributing

The `build` directory must be committed. This is the actual package that is imported in Coursemology.

Even if you didn't change anything, rebuilding will most likely generate a different `build`. This is normal. Just make sure you're committing _only when there are tangible changes to this custom build_.
