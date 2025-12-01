import { Alignment } from "@ckeditor/ckeditor5-alignment/dist/index.js";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat/dist/index.js";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles/dist/index.js";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote/dist/index.js";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block/dist/index.js";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic/dist/index.js";
import { Essentials } from "@ckeditor/ckeditor5-essentials/dist/index.js";
import {
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font/dist/index.js";
import { Heading } from "@ckeditor/ckeditor5-heading/dist/index.js";
import { Highlight } from "@ckeditor/ckeditor5-highlight/dist/index.js";
import LinkFormExtension from './plugins/LinkFormExtension';
import {
  AutoImage,
  ImageBlock,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageUpload,
} from "@ckeditor/ckeditor5-image/dist/index.js";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent/dist/index.js";
import { Link } from "@ckeditor/ckeditor5-link/dist/index.js";
import { List, ListProperties } from "@ckeditor/ckeditor5-list/dist/index.js";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed/dist/index.js";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph/dist/index.js";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format/dist/index.js";
import {
  Table,
  TableCellProperties,
  TableColumnResize,
  TableToolbar,
} from "@ckeditor/ckeditor5-table/dist/index.js";
import { BalloonToolbar } from "@ckeditor/ckeditor5-ui/dist/index.js";
import { FileRepository } from "@ckeditor/ckeditor5-upload/dist/index.js";

import "@ckeditor/ckeditor5-theme-lark/dist/index.css";
import "@ckeditor/ckeditor5-clipboard/dist/index.css";
import "@ckeditor/ckeditor5-core/dist/index.css";
import "@ckeditor/ckeditor5-engine/dist/index.css";
import "@ckeditor/ckeditor5-enter/dist/index.css";
import "@ckeditor/ckeditor5-paragraph/dist/index.css";
import "@ckeditor/ckeditor5-select-all/dist/index.css";
import "@ckeditor/ckeditor5-typing/dist/index.css";
import "@ckeditor/ckeditor5-ui/dist/index.css";
import "@ckeditor/ckeditor5-undo/dist/index.css";
import "@ckeditor/ckeditor5-upload/dist/index.css";
import "@ckeditor/ckeditor5-utils/dist/index.css";
import "@ckeditor/ckeditor5-watchdog/dist/index.css";
import "@ckeditor/ckeditor5-widget/dist/index.css";
import "@ckeditor/ckeditor5-alignment/dist/index.css";
import "@ckeditor/ckeditor5-autoformat/dist/index.css";
import "@ckeditor/ckeditor5-basic-styles/dist/index.css";
import "@ckeditor/ckeditor5-block-quote/dist/index.css";
import "@ckeditor/ckeditor5-code-block/dist/index.css";
import "@ckeditor/ckeditor5-editor-classic/dist/index.css";
import "@ckeditor/ckeditor5-essentials/dist/index.css";
import "@ckeditor/ckeditor5-font/dist/index.css";
import "@ckeditor/ckeditor5-heading/dist/index.css";
import "@ckeditor/ckeditor5-highlight/dist/index.css";
import "@ckeditor/ckeditor5-image/dist/index.css";
import "@ckeditor/ckeditor5-indent/dist/index.css";
import "@ckeditor/ckeditor5-link/dist/index.css";
import "@ckeditor/ckeditor5-list/dist/index.css";
import "@ckeditor/ckeditor5-media-embed/dist/index.css";
import "@ckeditor/ckeditor5-remove-format/dist/index.css";
import "@ckeditor/ckeditor5-table/dist/index.css";

ClassicEditor.defaultConfig = {
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
    shouldNotGroupWhenFull: false,
  },
  plugins: [
    LinkFormExtension,
    Alignment,
    Autoformat,
    AutoImage,
    BalloonToolbar,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FileRepository,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    ImageBlock,
    ImageInline,
    ImageInsertViaUrl,
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
  ],
  balloonToolbar: [
    "bold",
    "italic",
    "|",
    "link",
    "|",
    "bulletedList",
    "numberedList",
  ],
  licenseKey: "GPL",
  language: "en",
  fontFamily: {
    supportAllValues: true,
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
    ],
  },
  link: {
    defaultProtocol: "https://",
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    },
    toolbar: [ 'linkPreview', '|', 'editLink', 'unlink' ],
  },
  mediaEmbed: {
    removeProviders: [
      "spotify",
      "instagram",
      "twitter",
      "googleMaps",
      "flickr",
      "facebook",
    ],
  },
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5",
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6",
      },
      // To format <pre> properly (summernote compatability).
      // CKEditor will change it to <pre><code> but on edit it will render properly
      {
        // @ts-ignore
        model: "formatted",
        view: "pre",
        title: "Formatted",
      },
    ],
  },
};

export default ClassicEditor;
