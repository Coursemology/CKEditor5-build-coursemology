/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic/build/editor-classic.js";
import { Alignment } from "@ckeditor/ckeditor5-alignment/build/alignment.js";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat/build/autoformat.js";
import {
  AutoImage,
  ImageInline,
  ImageResize,
  ImageUpload,
} from "@ckeditor/ckeditor5-image/build/image.js";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote/build/block-quote.js";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles/build/basic-styles.js";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block/build/code-block.js";
import { Essentials } from "@ckeditor/ckeditor5-essentials/build/essentials.js";
import {
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font/build/font.js";
import { Heading } from "@ckeditor/ckeditor5-heading/build/heading.js";
import { Highlight } from "@ckeditor/ckeditor5-highlight/build/highlight.js";
import {
  Indent,
  IndentBlock,
} from "@ckeditor/ckeditor5-indent/build/indent.js";
import { Link } from "@ckeditor/ckeditor5-link/build/link.js";
import { List, ListProperties } from "@ckeditor/ckeditor5-list/build/list.js";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed/build/media-embed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format/build/remove-format.js";
import {
  Table,
  TableCellProperties,
  TableColumnResize,
  TableToolbar,
} from "@ckeditor/ckeditor5-table/build/table.js";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoImage,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  ImageInline,
  ImageResize,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  RemoveFormat,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableColumnResize,
  TableToolbar,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "fontSize",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "code",
      "codeBlock",
      "blockQuote",
      "removeFormat",
      "|",
      "subscript",
      "superscript",
      "|",
      "fontFamily",
      "fontColor",
      "highlight",
      "|",
      "indent",
      "outdent",
      "bulletedList",
      "numberedList",
      "alignment",
      "|",
      "insertTable",
      "imageUpload",
      "link",
      "mediaEmbed",
    ],
  },
  language: "en",
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
    ],
  },
};

export default Editor;
